import React, { memo } from 'react'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import useOpenModal from '../../../../../hooks/useOpenModal'
import { REPLY } from '../../../../../App/Modal/Index'

const CommentButton = ({ comment }) => {
  const openCommentModal = useOpenModal(REPLY, {
    replyType: comment.commentType ? 'TRIBUNAL_COMMENT_REPLY' : 'COMMENT_REPLY', commentId: comment.id, rootParentCommentId: comment.rootId || comment.id, commentType: comment.commentType,
  })

  return (
    <IconButton icon={<CommentSvg />} onClick={openCommentModal} />
  )
}

export default memo(CommentButton)
