import { $getRoot, $getSelection, $createParagraphNode, $createTextNode, LexicalNode } from "lexical";
import { useCallback } from "react";
import { PollNode, SerializedPollNode } from "../../../CommonComponents/Lexical/nodes/PollNode";

/* eslint-disable no-underscore-dangle */
export default () => useCallback(async (editor) => {
  const editorState = editor.getEditorState()

  let [pollNodeKey] = [null]

  const getPollNode: Promise<LexicalNode>= new Promise((resolve, reject) => { 
    editorState._nodeMap.forEach(async (node: LexicalNode, key: string, map: Map<string, LexicalNode>) => {
      if (node.__type === 'poll') {
        pollNodeKey = key
        resolve(node)
      }
      if ([...map][map.size-1][0] === key) {
        resolve(null)
      }
  })
})

  const pollNode = await getPollNode
  if (!pollNode) return  new Promise(resolve => resolve(null))
  const jsonPollNode = pollNode.exportJSON()

  editor.setEditable(true);
  editor.update(() => {
    const pollNode: LexicalNode = editorState._nodeMap.get(pollNodeKey)
    pollNode.remove()
  })

  return new Promise(resolve => setTimeout(() => {
    resolve(jsonPollNode)
  }, 100))

}, [])
