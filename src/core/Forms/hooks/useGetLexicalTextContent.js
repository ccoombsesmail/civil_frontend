import { useState, useEffect } from 'react'

export default (editor) => {
  const [textContent, setTextContent] = useState()

  const removeTextContentListener = editor.registerTextContentListener(
    (text) => {
      setTextContent(text.toLowerCase())
    },
  )

  useEffect(() => () => removeTextContentListener(), [])

  return textContent
}
