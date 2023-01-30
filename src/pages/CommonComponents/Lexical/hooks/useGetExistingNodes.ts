import { LexicalEditor, LexicalNode } from "lexical";
import { useMemo } from "react";

export default (editor: LexicalEditor) => useMemo(() => {
  const editorState = editor.getEditorState()
  const existingNodeTypes = {
    poll: false,
  }
  console.log(editorState._nodeMap)
  editorState._nodeMap.forEach((node: LexicalNode, key: string, map: Map<string, LexicalNode>) => {
    existingNodeTypes[node.__type] = true
  })
  return existingNodeTypes
}, [editor])