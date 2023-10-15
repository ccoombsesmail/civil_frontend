/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  DecoratorNode,
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';
import * as React from 'react';
import {Suspense} from 'react';
import { v4 as uuidv4 } from 'uuid';

export type Options = ReadonlyArray<Option>;

export type Option = Readonly<{
  text: string;
  id: string;
  votes: number;
  voteCast: boolean, // Determines if the requesting user has voted
}>;

const PollComponent = React.lazy(
  // @ts-ignore
  () => import('./PollComponent'),
);


export function createPollOption(text = ''): Option {
  return {
    text,
    id: uuidv4(),
    votes: 0,
    voteCast: false,
  };
}

function cloneOption(
  option: Option,
  text: string,
  votes?: number,
  voteCast?: boolean
): Option {
  return {
    text,
    id: option.id,
    votes: votes || 0,
    voteCast
  };
}

export type SerializedPollNode = Spread<
  {
    question: string;
    options: Options;
    type: 'poll';
    version: 1;
  },
  SerializedLexicalNode
>;

function convertPollElement(domNode: HTMLElement): DOMConversionOutput | null {
  const question = domNode.getAttribute('data-lexical-poll-question');
  if (question !== null) {
    const node = $createPollNode(question);
    return {node};
  }
  return null;
}

export class PollNode extends DecoratorNode<JSX.Element> {
  __question: string;
  __options: Options;
  __isCreating: boolean

  static getType(): string {
    return 'poll';
  }

  static clone(node: PollNode): PollNode {
    return new PollNode(node.__question, node.__options, node.__key);
  }

  static importJSON(serializedNode: SerializedPollNode): PollNode {
    const node = $createPollNode(serializedNode.question, serializedNode.options);
    // serializedNode.options.forEach(node.addOption);
    return node;
  }

  constructor(question: string, options?: Options, key?: NodeKey, isCreating?: boolean) {
    super(key);
    this.__question = question;
    this.__isCreating = isCreating;
    this.__options = options || [createPollOption(''), createPollOption('')];
  }

  exportJSON(): SerializedPollNode {
    return {
      options: this.__options,
      question: this.__question,
      type: 'poll',
      version: 1,
    };
  }

  addOption(option: Option): void {
    const self = this.getWritable();
    const options = Array.from(self.__options);
    options.push(option);
    self.__options = options;
  }

  deleteOption(option: Option): void {
    const self = this.getWritable();
    const options = Array.from(self.__options);
    const index = options.indexOf(option);
    options.splice(index, 1);
    self.__options = options;
  }

  setOptionText(option: Option, text: string): void {
    const self = this.getWritable();
    const clonedOption = cloneOption(option, text, option.votes, option.voteCast);
    const options = Array.from(self.__options);
    const index = options.findIndex(opt => opt.id == option.id);
    options[index] = clonedOption;
    self.__options = options;
  }

  toggleVote(option: Option): void {
    const self = this.getWritable();
    const votes = option;
    const clonedOption = cloneOption(option, option.text, option.votes, option.voteCast);
    const options = Array.from(self.__options);
    const index = options.findIndex(opt => opt.id == option.id);
    options[index] = clonedOption;
    self.__options = options;
  }

  static importDOM(): DOMConversionMap | null {
    return {
      span: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-lexical-poll-question')) {
          return null;
        }
        return {
          conversion: convertPollElement,
          priority: 2,
        };
      },
    };
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('span');
    element.setAttribute('data-lexical-poll-question', this.__question);
    return {element};
  }

  createDOM(): HTMLElement {
    const elem = document.createElement('span');
    elem.style.display = 'inline-block';
    return elem;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <PollComponent
          question={this.__question}
          options={this.__options}
          nodeKey={this.__key}
          isCreating={this.__isCreating}
          
        />
      </Suspense>
    );
  }
}

export function $createPollNode(question: string, options?: Options, isCreating?: boolean): PollNode {
  return new PollNode(question, options, undefined, isCreating);
}

export function $isPollNode(
  node: LexicalNode | null | undefined,
): node is PollNode {
  return node instanceof PollNode;
}
