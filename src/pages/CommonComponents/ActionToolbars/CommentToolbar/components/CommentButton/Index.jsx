import React, { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import useModal from '../../../../Lexical/hooks/useModal.tsx'
import CreateCommentForm from '../../../../../Forms/CommentForm/Index'

const CommentButton = ({ comment }) => {
  const { contentId } = useParams()
  const [modal, showModal] = useModal()
  const onClick = useCallback(() => {
    showModal('Write A Reply', (onClose) => (
      <CreateCommentForm
        closeModal={onClose}
        modalProps={{
          replyType: comment.commentType ? 'TRIBUNAL_COMMENT_REPLY' : 'COMMENT_REPLY',
          commentId: comment.id,
          rootParentCommentId: comment.rootId || comment.id,
          commentType: comment.commentType,
          tribunalCommentUnderReviewId: contentId,
        }}
      />
    ))
  }, [])

  return (
    <>
      {modal}
      <IconButton icon={<CommentSvg />} onClick={onClick} />

    </>
  )
}

export default memo(CommentButton)
