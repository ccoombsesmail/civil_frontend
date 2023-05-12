import React, { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { toast } from 'react-toastify'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import useModal from '../../../../Lexical/hooks/useModal'
import CreateCommentForm from '../../../../../Forms/CommentForm/Index'
import useGetDiscussionCommentState from './hooks/useGetDiscussionCommentState'
import useGetSpaceCommentState from './hooks/useGetSpaceCommentState'
import { initialConfig } from '../../../../Lexical/App'
import { CircleLoading } from '../../../../../../svgs/spinners/CircleLoading'

function CommentButton({ discussion }) {
  const [modal, showModal] = useModal()
  const {
    spaceId,
  } = useParams()
  const getDiscussionCommentFormState = useGetDiscussionCommentState(discussion?.id)
  const getSpaceCommentFormState = useGetSpaceCommentState(spaceId)

  const onClick = useCallback(() => {
    const discussionCommentFormState = getDiscussionCommentFormState()
    const spaceCommentFormState = getSpaceCommentFormState()
    if (!spaceCommentFormState && !discussionCommentFormState) {
      toast.error("We're sorry. Something is not right on our end")
      return
    }
    showModal('Write A Reply', (onClose) => (
      <CreateCommentForm
        closeModal={onClose}
        commentFormState={discussion ? discussionCommentFormState : spaceCommentFormState}
      />
    ))
  }, [getSpaceCommentFormState, getDiscussionCommentFormState])

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        {modal}
      </LexicalComposer>
      { getSpaceCommentFormState ? <IconButton icon={<CommentSvg />} onClick={onClick} /> : <CircleLoading size={5} /> }

    </>
  )
}

export default memo(CommentButton)
