import React, { memo, useCallback } from 'react'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import useModal from '../../../../Lexical/hooks/useModal.tsx'
import { REPLY_FROM_TOPIC } from '../../../../../App/Modal/Index'
import CreateCommentForm from '../../../../../Forms/CommentForm/Index'

const CommentButton = () => {
  const [modal, showModal] = useModal()
  const onClick = useCallback(() => {
    showModal('Write A Reply', (onClose) => (
      <CreateCommentForm
        closeModal={onClose}
        modalProps={{
          replyType: REPLY_FROM_TOPIC,
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
