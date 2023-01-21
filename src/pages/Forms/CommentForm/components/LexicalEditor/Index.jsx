import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import React, { useEffect } from 'react'
import Editor from '../../../../CommonComponents/Lexical/Editor.tsx'

const LexicalEditor = ({ setRichTextEditorData }) => {
  const [editor] = useLexicalComposerContext()
  useEffect(() => {
    const removeUpdateListener = editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const jsonString = JSON.stringify(editorState)
        setRichTextEditorData((prev) => ({
          ...prev,
          lexicalContent: jsonString,
        }))
      })
    })

    const removeTextContentListener = editor.registerTextContentListener(
      (textContent) => {
        setRichTextEditorData((prev) => ({
          ...prev,
          rawText: textContent,
        }))
      },
    )
    return () => {
      removeTextContentListener()
      removeUpdateListener()
    }
  }, [])

  return (
    <div className="editor-shell">
      <Editor />
    </div>

  )
}

export default LexicalEditor
