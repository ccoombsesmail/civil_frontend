/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import * as React from 'react';
import ContentEditable from './ui/ContentEditable';
import Placeholder from './ui/Placeholder';


export default function ReadOnlyEditor({ className }): JSX.Element {
  const placeholder = <Placeholder>{"Loading..."}</Placeholder>;
  const [editor] = useLexicalComposerContext()
  React.useEffect(() => {
    setTimeout(() => {
      editor.setEditable(false)
    }, 1000)
  }, [editor])

  return (
    <>
      <div className={`editor-container ${className}`}>
          <>
            <RichTextPlugin
              contentEditable={
                <div className="editor-scroller">
                  <div className="editor">
                    <ContentEditable readOnly={true} />
                  </div>
                </div>
              }
              placeholder={placeholder}
              ErrorBoundary={LexicalErrorBoundary}
            />
          </>
      </div>
    </>
  );
}
