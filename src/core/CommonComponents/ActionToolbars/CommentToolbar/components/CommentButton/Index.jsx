import React, { memo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Dialog } from 'primereact/dialog'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import CreateCommentForm from '../../../../../Forms/CommentForm/Index'
import useGetCommentState from './hooks/useGetCommentState'
import { initialConfig } from '../../../../Lexical/App.tsx'
import { Button } from 'primereact/button'

function CommentButton({ comment }) {
  const { contentId, spaceId, commentId } = useParams()
  const [visible, setVisible] = useState(false)
  const commentFormState = useGetCommentState(comment, contentId, spaceId, commentId)

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        <Dialog header="Write A Reply" visible={visible} onHide={() => setVisible(false)}>
          <CreateCommentForm
            closeModal={() => setVisible(false)}
            commentFormState={commentFormState}
            title=""
          />
        </Dialog>
      </LexicalComposer>
      <CommentSvg onClick={() => setVisible(true)} />

    </>
  )
}

export default memo(CommentButton)
