import React, { memo, useState } from 'react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { Dialog } from 'primereact/dialog'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import CreateCommentForm from '../../../../../Forms/CommentForm/Index'
import useGetDiscussionCommentState from './hooks/useGetDiscussionCommentState'
import { initialConfig } from '../../../../Lexical/App.tsx'

function CommentButton({ discussion }) {
  const [visible, setVisible] = useState(false)
  const discussionCommentFormState = useGetDiscussionCommentState(discussion?.id)

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        <Dialog header="Create Comment" visible={visible} onHide={() => setVisible(false)}>
          <CreateCommentForm
            closeModal={() => setVisible(false)}
            commentFormState={discussionCommentFormState}
            title={discussion?.title}
          />
        </Dialog>
      </LexicalComposer>
      <IconButton icon={<CommentSvg />} onClick={() => setVisible(true)} />
    </>
  )
}

export default memo(CommentButton)
