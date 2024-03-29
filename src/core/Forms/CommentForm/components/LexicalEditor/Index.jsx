import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import React, { useEffect } from 'react'
import Editor from '../../../../CommonComponents/Lexical/Editor.tsx'

function LexicalEditor({ setRichTextEditorData }) {
  const [editor] = useLexicalComposerContext()
  useEffect(() => {
    const removeTextContentListener = editor.registerTextContentListener(
      (textContent) => {
        setRichTextEditorData((prev) => ({
          ...prev,
          editorTextContent: textContent,
        }))
      },
    )
    return () => {
      removeTextContentListener()
    }
  }, [])

  return (
    <div className="editor-shell">
      <Editor />
    </div>

  )
}

export default LexicalEditor
