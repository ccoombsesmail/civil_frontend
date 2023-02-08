/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Option, Options, PollNode } from "./PollNode";

import "./PollNode.css";

import { CircleLoading } from "../../../../svgs/spinners/CircleLoading.jsx";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalNodeSelection } from "@lexical/react/useLexicalNodeSelection";
import { mergeRegister } from "@lexical/utils";
import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  GridSelection,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  NodeKey,
  NodeSelection,
  RangeSelection,
} from "lexical";
import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Button from "../ui/Button";
import joinClasses from "../utils/join-classes";
import { $isPollNode, createPollOption } from "./PollNode";
import {
  useCreatePollVoteMutation,
  useDeletePollVoteMutation,
  useGetPollVoteDataQuery,
  Vote,
} from "../../../../api/services/pollVotes";
import useGetCurrentUser from "../../../App/hooks/useGetCurrentUser";


function getTotalVotes(options: Options): number {
  return options.reduce((totalVotes, next) => {
    return totalVotes + next.votes;
  }, 0);
}

function mergeOptions(options: Options, pollVoteData: Array<Vote>): Array<Option> {
  const voteMap = pollVoteData.reduce((voteMap, next) => {
    voteMap[next.pollOptionId] = next
    return voteMap;
  }, {});
  return options.map(opt => ({
    ...opt,
    ...voteMap[opt.id],
    votes: voteMap[opt.id]?.totalVotes || 0
  }))
}


function PollOptionComponent({
  option,
  index,
  options,
  totalVotes,
  withPollNode,
  disableVoting,
}: {
  index: number;
  option: Option;
  options: Options;
  totalVotes: number;
  withPollNode: (
    cb: (pollNode: PollNode) => void,
    onSelect?: () => void
  ) => void;
  disableVoting: boolean;
}): JSX.Element {

  const [createPollVote] = useCreatePollVoteMutation();
  const [deletePollVote] = useDeletePollVoteMutation();
  const checkboxRef = useRef(null);
  const text = option.text;
  const onChange = useCallback(async (e) => {
    let pollVote;
    if (option.voteCast) {
      pollVote = await deletePollVote(option.id).unwrap();
    } else {
      pollVote = await createPollVote({
        pollOptionId: option.id,
      }).unwrap();
    }
    withPollNode((node) => {
      node.toggleVote({
        ...option,
        votes: pollVote.totalVotes,
      });
    });
  }, [option]);
  return (
    <div className="PollNode__optionContainer">
      <div
        className={joinClasses(
          "PollNode__optionCheckboxWrapper",
          option.voteCast && "PollNode__optionCheckboxChecked"
        )}
      >
        <input
          ref={checkboxRef}
          className="PollNode__optionCheckbox"
          type="checkbox"
          onChange={onChange}
          checked={option.voteCast}
          disabled={disableVoting}
        />
      </div>
      <div className="PollNode__optionInputWrapper">
        <div
          className="PollNode__optionInputVotes"
          style={{
            width: `${
              option.votes === 0 ? 0 : (option.votes / totalVotes) * 100
            }%`,
          }}
        />
        <span className="PollNode__optionInputVotesCount">
          {option.votes > 0 &&
            (option.votes === 1 ? "1 vote" : `${option.votes} votes`)}
        </span>
        <input
          className="PollNode__optionInput"
          type="text"
          value={text}
          onChange={(e) => {
            const target = e.target;
            const value = target.value;
            const selectionStart = target.selectionStart;
            const selectionEnd = target.selectionEnd;
            console.log(value)
            withPollNode(
              (node) => {
                node.setOptionText(option, value);
              },
              () => {
                target.selectionStart = selectionStart;
                target.selectionEnd = selectionEnd;
              }
            );
          }}
          placeholder={`Enter An Option`}
        />
      </div>
     { disableVoting && <button
        type="button"
        disabled={options.length < 3}
        className={joinClasses(
          "PollNode__optionDelete",
          options.length < 3 && "PollNode__optionDeleteDisabled"
        )}
        arial-label="Remove"
        onClick={() => {
          withPollNode((node) => {
            node.deleteOption(option);
          });
        }}
      />}
    </div>
  );
}

export default function PollComponent({
  question,
  options,
  nodeKey,
  isCreating
}: {
  nodeKey: NodeKey;
  options: Options;
  question: string;
  isCreating: boolean
}): JSX.Element {
  const { currentUser } = useGetCurrentUser();
  const { data: pollVoteData = [], isLoading } = useGetPollVoteDataQuery(
    options.map((o) => o.id),
    { skip: !currentUser || isCreating }
  );
  const [editor] = useLexicalComposerContext();
  const totalVotes = useMemo(() => {
    if (options && pollVoteData.length) {
      return getTotalVotes(mergeOptions(options, pollVoteData))
    }
    return 0
  }, [options, pollVoteData]);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(
    nodeKey
  );
  const [selection, setSelection] = useState<
    RangeSelection | NodeSelection | GridSelection | null
  >(null);
  const ref = useRef(null);

  const onDelete = useCallback(
    (payload: KeyboardEvent) => {
      if (isSelected && $isNodeSelection($getSelection())) {
        const event: KeyboardEvent = payload;
        event.preventDefault();
        const node = $getNodeByKey(nodeKey);
        if ($isPollNode(node)) {
          node.remove();
        }
        setSelected(false);
      }
      return false;
    },
    [isSelected, nodeKey, setSelected]
  );

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        setSelection(editorState.read(() => $getSelection()));
      }),
      editor.registerCommand<MouseEvent>(
        CLICK_COMMAND,
        (payload) => {
          const event = payload;

          if (event.target === ref.current) {
            if (!event.shiftKey) {
              clearSelection();
            }
            setSelected(!isSelected);
            return true;
          }

          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_DELETE_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_BACKSPACE_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW
      )
    );
  }, [clearSelection, editor, isSelected, nodeKey, onDelete, setSelected]);

  const withPollNode = (
    cb: (node: PollNode) => void,
    onUpdate?: () => void
  ): void => {
    editor.update(
      () => {
        const node = $getNodeByKey(nodeKey);
        if ($isPollNode(node)) {
          cb(node);
        }
      },
      { onUpdate }
    );
  };

  const addOption = () => {
    withPollNode((node) => {
      node.addOption(createPollOption());
    });
  };

  const isFocused = $isNodeSelection(selection) && isSelected;
  const disableVoting = editor.isEditable()
  return (
    <div
      className={`PollNode__container ${isFocused ? "focused" : ""}`}
      ref={ref}
    >
      { isLoading && !isCreating ? <CircleLoading /> : (
      <div className="PollNode__inner">
        <h2 className="PollNode__heading">{question}</h2>
        {mergeOptions(options, pollVoteData).map((option, index) => {
          const key = option.id;
          return (
            <PollOptionComponent
              key={key}
              withPollNode={withPollNode}
              option={option}
              index={index}
              options={options}
              totalVotes={totalVotes}
              disableVoting={editor.isEditable()}
            />
          );
        })}
        <div className="PollNode__footer" style={{display: `${disableVoting ? 'block' : 'none'}`}}>
          <Button onClick={addOption} small={true} type="button">
            Add Option
          </Button>
        </div>
      </div>)

      }
    </div>
  );
}
