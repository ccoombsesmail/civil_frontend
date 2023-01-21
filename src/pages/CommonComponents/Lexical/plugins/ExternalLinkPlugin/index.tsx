/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {$insertNodeToNearestRoot} from '@lexical/utils';
import {COMMAND_PRIORITY_EDITOR, createCommand, LexicalCommand} from 'lexical';
import {useEffect} from 'react';

import {$createYouTubeNode, YouTubeNode} from '../../nodes/YouTubeNode';

export const INSERT_EXTERNAL_LINK_COMMAND: LexicalCommand<string> = createCommand(
  'INSERT_EXTERNAL_LINK_COMMAND',
);

export default function ExternalLinkPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([YouTubeNode])) {
      throw new Error('YouTubePlugin: YouTubeNode not registered on editor');
    }

    return editor.registerCommand<string>(
      INSERT_EXTERNAL_LINK_COMMAND,
      (payload) => {
        // const externalLinkNode = $createExternalLinkNode(payload);
        // $insertNodeToNearestRoot(externalLinkNode);

        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [editor]);

  return null;
}
