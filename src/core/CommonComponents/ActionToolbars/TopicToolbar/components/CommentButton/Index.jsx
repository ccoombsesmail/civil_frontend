import React, { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { toast } from 'react-toastify'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import useModal from '../../../../Lexical/hooks/useModal.tsx'
import CreateCommentForm from '../../../../../Forms/CommentForm/Index'
import useGetDiscussionCommentState from './hooks/useGetDiscussionCommentState'
import useGetTopicCommentState from './hooks/useGetTopicCommentState'
import { initialConfig } from '../../../../Lexical/App.tsx'
import { CircleLoading } from '../../../../../../svgs/spinners/CircleLoading'

function CommentButton({ discussion }) {
  const [modal, showModal] = useModal()
  const {
    topicId,
  } = useParams()
  const getDiscussionCommentFormState = useGetDiscussionCommentState(discussion?.id)
  const getTopicCommentFormState = useGetTopicCommentState(topicId)

  const onClick = useCallback(() => {
    const discussionCommentFormState = getDiscussionCommentFormState()
    const topicCommentFormState = getTopicCommentFormState()
    if (!topicCommentFormState && !discussionCommentFormState) {
      toast.error("We're sorry. Something is not right on our end")
      return
    }
    console.log(discussionCommentFormState)
    showModal('Write A Reply', (onClose) => (
      <CreateCommentForm
        closeModal={onClose}
        commentFormState={discussion ? discussionCommentFormState : topicCommentFormState}
      />
    ))
  }, [getTopicCommentFormState, getDiscussionCommentFormState])

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        {modal}
      </LexicalComposer>
      { getTopicCommentFormState ? <IconButton icon={<CommentSvg />} onClick={onClick} /> : <CircleLoading size={5} /> }

    </>
  )
}

export default memo(CommentButton)
