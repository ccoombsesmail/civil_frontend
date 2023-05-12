/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {LexicalEditor} from 'lexical';
import { useEffect } from 'react'
import {
  AutoEmbedOption,
  EmbedConfig,
  EmbedMatchResult,
  LexicalAutoEmbedPlugin,
  URL_MATCHER,
} from '@lexical/react/LexicalAutoEmbedPlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {useMemo, useState} from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom'
import ReactDOMClient from "react-dom/client";

import useModal from '../../hooks/useModal';
import Button from '../../ui/Button';
import {DialogActions} from '../../ui/Dialog';
import {INSERT_TWEET_COMMAND} from '../TwitterPlugin';
import {INSERT_YOUTUBE_COMMAND} from '../YouTubePlugin';
import { LexicalFormContext } from '../../../../Forms/SpaceForm/LexicalFormContext'
import { YouTubeComponent } from '../../nodes/YouTubeNode';
import { TweetComponent } from '../../nodes/TweetNode';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { initialConfig } from '../../App'
import LinkMetaData from '../../../../Forms/components/LinkMetaData/Index'

import { getLinkMetaData } from '../../../../../api/v1/spaces/spaces_api_util.js'
import { INSERT_EXTERNAL_LINK_COMMAND } from '../ExternalLinkPlugin/index';
import { useGetLinkMetaDataMutation } from '../../../../../api/services/links';
import { Provider } from 'react-redux';
import configureStore from './../../../../../redux/store';


export type LexicalFormContextValue = {
  setContentUrl:(emb: EmbedMatchResult) => void,
  setMetaData:(emb: EmbedMatchResult) => void

}

interface PlaygroundEmbedConfig extends EmbedConfig {
  // Human readable name of the embeded content e.g. Tweet or Google Map.
  contentName: string;

  // Icon for display.
  icon?: JSX.Element;

  // An example of a matching url https://twitter.com/jack/status/20
  exampleUrl: string;

  // For extra searching.
  keywords: Array<string>;

  // Embed a Figma Project.
  description?: string;

  submitCallback: (result: EmbedMatchResult) => void | null
}


const YouTubeSharedConfig = {
  contentName: 'Youtube Video',

  exampleUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',

  // Icon for display.
  icon: <i className="icon youtube" />,

  insertNode: (editor: LexicalEditor, result: EmbedMatchResult) => {
    editor.dispatchCommand(INSERT_YOUTUBE_COMMAND, result.id);
  },

  keywords: ['youtube', 'video'],

  // Determine if a given URL is a match and return url data.
  parseUrl: async (url: string) => {
    const match =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(url);

    const id = match ? (match?.[2].length === 11 ? match[2] : null) : null;

    if (id != null) {
      return {
        id,
        url,
      };
    }

    return null;
  },
}

export const YoutubeEmbedConfig: PlaygroundEmbedConfig = {
  ...YouTubeSharedConfig,
  submitCallback: null,
  type: 'youtube-video',
};

export const YoutubeEmbedConfigSpace = (submitCallback): PlaygroundEmbedConfig => ({
  ...YouTubeSharedConfig,
  submitCallback: (result: EmbedMatchResult) => ReactDOMClient.createRoot(document.getElementById('insert-embed-node')).render(
    <LexicalComposer initialConfig={initialConfig} > 
      <YouTubeComponent 
        className={{
          base: '',
          focus: '',
        }}
        nodeKey="youtube-video-space"
        videoID={result.id} 
        format={''} 
        />
    </LexicalComposer>),
  type: 'youtube-video-space',
});



const TwitterEmbedConfigShared = {
// e.g. Tweet or Google Map.
  contentName: 'Tweet',

  exampleUrl: 'https://twitter.com/jack/status/20',

  // Icon for display.
  icon: <i className="icon tweet" />,

  // Create the Lexical embed node from the url data.
  insertNode: (editor: LexicalEditor, result: EmbedMatchResult) => {
    editor.dispatchCommand(INSERT_TWEET_COMMAND, result.id);
  },

  // For extra searching.
  keywords: ['tweet', 'twitter'],

  // Determine if a given URL is a match and return url data.
  parseUrl: (text: string) => {
    const match =
      /^https:\/\/twitter\.com\/(#!\/)?(\w+)\/status(es)*\/(\d+)$/.exec(text);

    if (match != null) {
      return {
        id: match[4],
        url: match[0],
      };
    }

    return null;
  },
}

export const TwitterEmbedConfig: PlaygroundEmbedConfig = {
  ...TwitterEmbedConfigShared,
  submitCallback: null,
  type: 'tweet',
};

export const TwitterEmbedConfigSpace = (submitCallback): PlaygroundEmbedConfig => ({
  ...TwitterEmbedConfigShared,
  type: 'tweet-space',
  submitCallback: (result: EmbedMatchResult) => ReactDOMClient.createRoot(document.getElementById('insert-embed-node')).render(
    <LexicalComposer initialConfig={initialConfig} > 
      <TweetComponent 
        className={{
          base: '',
          focus: '',
        }}
        loadingComponent="Loading..."
        nodeKey="tweet-space"
        tweetID={result.id} 
        format={''} 
        />
    </LexicalComposer>)
  
});

export const ExternalLinkConfigSpace = (submitCallback): PlaygroundEmbedConfig => ({
  contentName: 'External Link',

  exampleUrl: 'https://lexical.dev/docs/concepts/read-only',

  // Icon for display.
  icon: <i className="fa fa-external-link icon" aria-hidden="true"></i>,

  // Create the Lexical embed node from the url data.
  insertNode: (editor: LexicalEditor, result: EmbedMatchResult) => {
    editor.dispatchCommand(INSERT_EXTERNAL_LINK_COMMAND, result.id);
  },

  // For extra searching.
  keywords: ['external', 'link'],

  // Determine if a given URL is a match and return url data.
  parseUrl: (text: string) => {
    const match = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.exec(text);

    if (match != null) {
      return {
        id: null,
        url: match[0]
      }
    }

    return null;
  },
  type: 'external-link-space',
  submitCallback: (result: EmbedMatchResult) => ReactDOMClient.createRoot(document.getElementById('insert-embed-node')).render(
    <Provider store={configureStore}>
      <LinkMetaData
        metaData={result.data}
        externalContentUrl={result.url}
        url={result.url}
        />
    </Provider>
    )
  
});


export const EmbedConfigs = [
  TwitterEmbedConfig,
  YoutubeEmbedConfig,
];

export const EmbedConfigsSpace = [
  TwitterEmbedConfigSpace,
  YoutubeEmbedConfigSpace,
];


function AutoEmbedMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option,
}: {
  index: number;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  option: AutoEmbedOption;
}) {
  let className = 'item';
  if (isSelected) {
    className += ' selected';
  }
  return (
    <li
      key={option.key}
      tabIndex={-1}
      className={className}
      ref={option.setRefElement}
      role="option"
      aria-selected={isSelected}
      id={'typeahead-item-' + index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}>
      <span className="text">{option.title}</span>
    </li>
  );
}

function AutoEmbedMenu({
  options,
  selectedItemIndex,
  onOptionClick,
  onOptionMouseEnter,
}: {
  selectedItemIndex: number | null;
  onOptionClick: (option: AutoEmbedOption, index: number) => void;
  onOptionMouseEnter: (index: number) => void;
  options: Array<AutoEmbedOption>;
}) {
  return (
    <div className="typeahead-popover">
      <ul>
        {options.map((option: AutoEmbedOption, i: number) => (
          <AutoEmbedMenuItem
            index={i}
            isSelected={selectedItemIndex === i}
            onClick={() => onOptionClick(option, i)}
            onMouseEnter={() => onOptionMouseEnter(i)}
            key={option.key}
            option={option}
          />
        ))}
      </ul>
    </div>
  );
}

const debounce = (callback: (text: string) => void, delay: number) => {
  let timeoutId: number;
  return (text: string) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(text);
    }, delay);
  };
};

export function AutoEmbedDialog({
  embedConfig,
  onClose,
}: {
  embedConfig: PlaygroundEmbedConfig;
  onClose: () => void;
}): JSX.Element {
  const [text, setText] = useState('');
  const [editor] = useLexicalComposerContext();
  const [embedResult, setEmbedResult] = useState<EmbedMatchResult | null>(null);
  const { setContentUrl } = React.useContext<LexicalFormContextValue>(LexicalFormContext)
  
  const validateText = useMemo(
    () =>
      debounce((inputText: string) => {
        const urlMatch = URL_MATCHER.exec(inputText);
        if (embedConfig != null && inputText != null && urlMatch != null) {
          Promise.resolve(embedConfig.parseUrl(inputText)).then(
            (parseResult) => {
              setEmbedResult(parseResult);
            },
          );
        } else if (embedResult != null) {
          setEmbedResult(null);
        }
      }, 200),
    [embedConfig, embedResult],
  );

  const onClick = async () => {
    if (embedResult != null) {
      if (embedConfig.type === 'external-link-space') {
        setContentUrl({
          ...embedResult,
          data: embedResult.url
        })
        embedConfig.submitCallback({
          ...embedResult,
          data: embedResult.url
        })
      }
      else if (['tweet-space', 'youtube-video-space'].includes(embedConfig.type)) {
        setContentUrl(embedResult)
        embedConfig.submitCallback(embedResult)
      } else embedConfig.insertNode(editor, embedResult);
      onClose();
    }
  };

  return (
    <div className="Dialog__wrapper">
      <div className="Input__wrapper">
        <input
          autoFocus
          type="text"
          className="Input__input"
          placeholder={embedConfig.exampleUrl}
          value={text}
          data-test-id={`${embedConfig.type}-embed-modal-url`}
          onChange={(e) => {
            const {value} = e.target;
            setText(value);
            validateText(value);
          }}
        />
      </div>
      <DialogActions>
        <Button
          disabled={!embedResult}
          onClick={onClick}
          data-test-id={`${embedConfig.type}-embed-modal-submit-btn`}>
          Embed
        </Button>
      </DialogActions>
    </div>
  );
}

export default function AutoEmbedPlugin(): JSX.Element {
  const [modal, showModal] = useModal();
  const { setContentUrl } = React.useContext<LexicalFormContextValue>(LexicalFormContext)
  const openEmbedModal = (embedConfig: PlaygroundEmbedConfig) => {
    showModal(`Embed ${embedConfig.contentName}`, (onClose) => (
      <AutoEmbedDialog embedConfig={embedConfig} onClose={onClose} />
    ));
  };

  const getMenuOptions = (
    activeEmbedConfig: PlaygroundEmbedConfig,
    embedFn: () => void,
    dismissFn: () => void,
  ) => {
    return [
      new AutoEmbedOption('Dismiss', {
        onSelect: dismissFn,
      }),
      new AutoEmbedOption(`Embed ${activeEmbedConfig.contentName}`, {
        onSelect: embedFn,
      }),
    ];
  };

  return (
    <div className='Modal__popover_link'>
      {modal}
      <LexicalAutoEmbedPlugin<PlaygroundEmbedConfig>
        embedConfigs={[...EmbedConfigs, TwitterEmbedConfigSpace(setContentUrl), YoutubeEmbedConfigSpace(setContentUrl), ExternalLinkConfigSpace(setContentUrl)]}
        onOpenEmbedModalForConfig={openEmbedModal}
        getMenuOptions={getMenuOptions}
        menuRenderFn={(
          anchorElementRef,
          {selectedIndex, options, selectOptionAndCleanUp, setHighlightedIndex},
        ) =>
          anchorElementRef.current
            ? ReactDOM.createPortal(
                <div
                  className="typeahead-popover auto-embed-menu"
                  style={{
                    marginLeft: anchorElementRef.current.style.width,
                    width: 200,
                  }}>
                  <AutoEmbedMenu
                    options={options}
                    selectedItemIndex={selectedIndex}
                    onOptionClick={(option: AutoEmbedOption, index: number) => {
                      setHighlightedIndex(index);
                      selectOptionAndCleanUp(option);
                    }}
                    onOptionMouseEnter={(index: number) => {
                      setHighlightedIndex(index);
                    }}
                  />
                </div>,
                anchorElementRef.current,
              )
            : null
        }
      />
    </div>
  );
}
