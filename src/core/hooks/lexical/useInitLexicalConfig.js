import { useMemo } from 'react'

import PlaygroundEditorTheme from '../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'

export default (editorState, namespace, editable) => {

  return useMemo(() => {
    const initialConfig = {
      editorState: editorState || null,
      namespace,
      nodes: [...PlaygroundNodes],
      onError: (error) => {
        throw error
      },
      editable,
      theme: PlaygroundEditorTheme,
    }
    return initialConfig
  }, [editorState, namespace, editable])

}