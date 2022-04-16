/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useCallback, useState, useEffect, useRef,
} from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

import { Container, EmojiButton, EmojiContainer } from './Style'
import { Overlay } from '../Overlay/style'

const RichTextEditor = ({
  content, setContent, setToxicityScore,
}) => {
  const [isHidden, setIsHidden] = useState(true)

  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  }

  const handleOnChange = useCallback((currContent, delta, source, editor) => {
    setContent({
      rawHTML: editor.getHTML(),
      content: editor.getContents(),
      rawText: editor.getText(),
    })
    if (setToxicityScore) setToxicityScore(null)
  }, [])

  const pickerRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(() => {
    if (pickerRef) {
      const emojiPicker = document.querySelector('unicode-emoji-picker')
      emojiPicker.addEventListener('emoji-pick', (event) => {
        if (quillRef.current) {
          const { editor } = quillRef.current
          const cursorPosition = editor.getSelection()?.index || editor.getLength() - 1
          editor.insertText(cursorPosition, `${event.detail.emoji}`)
          editor.setSelection(cursorPosition + 2)
        }
      })
    }
  }, [pickerRef, quillRef])

  const formats = ['bold', 'italic', 'underline', 'strike', 'blockquote', 'clean']
  return (
    <Container className="text-editor">
      <Overlay hidden={isHidden} onClick={() => setIsHidden((prev) => !prev)} />
      <CustomToolbar setIsHidden={setIsHidden} pickerRef={pickerRef} isHidden={isHidden} />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={content}
        onChange={handleOnChange}
        modules={modules}
        formats={formats}
        placeholder="Say something..."
      />
    </Container>
  )
}

const CustomButton = ({ isHidden, pickerRef, setIsHidden }) => (
  <>
    <span
      onClick={() => setIsHidden((prev) => !prev)}
      onKeyDown={() => setIsHidden((prev) => !prev)}
      role="button"
      tabIndex={0}
    >
      🙂
    </span>
    <EmojiContainer hidden={isHidden}>
      <unicode-emoji-picker ref={pickerRef} version="14.0" />
    </EmojiContainer>
  </>
)

const CustomToolbar = ({ setIsHidden, isHidden, pickerRef }) => (
  <div id="toolbar" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <button type="button" className="ql-bold" />
      <button type="button" className="ql-italic" />
      <button type="button" className="ql-underline" />
      <button type="button" className="ql-strike" />
      <button type="button" className="ql-blockquote" />
      <button type="button" className="ql-clean" />

    </div>

    <EmojiButton type="button" className="ql-insertEmoji">
      <CustomButton pickerRef={pickerRef} isHidden={isHidden} setIsHidden={setIsHidden} />
    </EmojiButton>
  </div>
)

export default RichTextEditor
