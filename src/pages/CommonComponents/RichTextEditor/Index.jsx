import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import quillEmoji from 'quill-emoji';
import 'react-quill/dist/quill.snow.css';
import "quill-emoji/dist/quill-emoji.css";

import { Container } from './Style';
const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;



Quill.register({
  'formats/emoji': EmojiBlot,
  'modules/emoji-shortname': ShortNameEmoji,
  'modules/emoji-toolbar': ToolbarEmoji,
  'modules/emoji-textarea': TextAreaEmoji
}, true);



const RichTextEditor = ({ content, setContent }) => {

  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'header': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['emoji'],
      ['link', 'image'],
      ['clean']
    ],
    'emoji-toolbar': true,
    "emoji-textarea": true,
    "emoji-shortname": true,
    
  }

  const formats = ['font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'color', 'background', 'list', 'indent', 'align', 'link', 'image', 'clean', 'emoji']
    return (
      <Container className="text-editor">
        <ReactQuill
          // theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />
      </Container>
    )

}

export default RichTextEditor