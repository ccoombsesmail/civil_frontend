import React, { memo } from 'react'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import useOpenModal from '../../../../../hooks/useOpenModal'
import { REPLY, REPLY_FROM_TOPIC } from '../../../../../App/Modal/Index'

const CommentButton = () => {
  const openCommentModal = useOpenModal(REPLY, { replyType: REPLY_FROM_TOPIC })

  return (
    <IconButton icon={<CommentSvg />} onClick={openCommentModal} />
  )
}

export default memo(CommentButton)
