/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import * as React from 'react';

import {SettingsContext, useSettings} from './context/SettingsContext';
import {SharedAutocompleteContext} from './context/SharedAutocompleteContext';
import {SharedHistoryContext} from './context/SharedHistoryContext';
import Editor from './Editor';
import PlaygroundNodes from './nodes/PlaygroundNodes';
import {TableContext} from './plugins/TablePlugin';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';

import './index.css'
import './toolbar.css'


export const initialConfig = {
  editorState: null,
  namespace: 'Civil',
  nodes: [...PlaygroundNodes],
  onError: (error: Error) => {
    throw error;
  },
  theme: PlaygroundEditorTheme,
};

function App(): JSX.Element {
  const {
    settings: {isCollab, measureTypingPerf},
  } = useSettings();



  return (
    // <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <TableContext>
          <SharedAutocompleteContext>
            <div className="editor-shell">
              <Editor />
            </div>
          </SharedAutocompleteContext>
        </TableContext>
      </SharedHistoryContext>
    // </LexicalComposer>
  );
}

export default function PlaygroundApp(): JSX.Element {
  return (
    <SettingsContext>
      <App />
    </SettingsContext>
  );
}
