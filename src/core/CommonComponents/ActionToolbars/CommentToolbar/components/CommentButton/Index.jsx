import React, { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import useModal from '../../../../Lexical/hooks/useModal.tsx'
import CreateCommentForm from '../../../../../Forms/CommentForm/Index'
import useGetCommentState from './hooks/useGetCommentState'
import { initialConfig } from '../../../../Lexical/App.tsx'

const CommentButton = ({ comment }) => {
  const { contentId, spaceId, commentId } = useParams()
  const [modal, showModal] = useModal()
  const getFommentFormState = useGetCommentState(comment, contentId, spaceId, commentId)
  const onClick = useCallback(() => {
    const commentFormState = getFommentFormState()
    showModal('Write A Reply', (onClose) => (
      <CreateCommentForm
        closeModal={onClose}
        commentFormState={commentFormState}
      />
    ))
  }, [getFommentFormState])

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        {modal}
      </LexicalComposer>
      <IconButton icon={<CommentSvg />} onClick={onClick} />

    </>
  )
}

export default memo(CommentButton)
