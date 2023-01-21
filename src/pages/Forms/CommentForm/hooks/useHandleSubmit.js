import { useCallback } from 'react'
import { toast } from 'react-toastify'

import { checkToxicity } from '../../../../api/v1/comments/comments_api_util'
import delay from '../../../../generic/delay'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage'
import { useCreateCommentMutation } from '../../../../api/services/comments.ts'
import { useCreateTribunalCommentMutation } from '../../../../api/services/tribunal_comments.ts'

export default (compState, content, rawText, modalProps, contentId, topicId, closeModal) => {
  const { isOnTribunalPage: isTribunalComment } = useDetectCurrentPage()
  const [createComment] = useCreateCommentMutation()
  const [createTribunalComment] = useCreateTribunalCommentMutation()

  const {
    tribunalCommentUnderReviewId,
    commentId,
  } = modalProps || {}

  const isParentTribunalCommentUnderReview = isTribunalComment
  && tribunalCommentUnderReviewId === commentId

  const parentId = isParentTribunalCommentUnderReview ? null : commentId || null
  const rootId = isParentTribunalCommentUnderReview ? null : compState.rootParentCommentId

  return useCallback((values, { setSubmitting, resetForm }) => {
    toast.promise(
      Promise.all([delay(1500), checkToxicity({ content })]),
      {
        pending: 'Analyzing Comment...',
        success: {
          render({ data }) {
            const toxicityScore = data[1].data.SEVERE_TOXICITY
            if (toxicityScore < 0.6) return 'Thanks For Being Civil!'
            if (toxicityScore >= 0.6 && toxicityScore <= 0.9) return 'Thanks for being semi-civil. Maybe say things a bit nicer'
            return 'You are being toxic :( \n Your comment will be flagged'
          },
          // other options
          icon: '🟢',
        },
        error: 'Promise rejected 🤯',
      },
    ).then((data) => {
      const toxicityScore = data[1].data.TOXICITY
      let toxicityStatus
      if (toxicityScore < 0.6) toxicityStatus = 'NOT_TOXIC'
      if (toxicityScore > 0.9) toxicityStatus = 'TOXIC'
      const comment = {
        ...values,
        content: JSON.stringify(content),
        memeFlag: false,
        parentId,
        contentId,
        discussionId: contentId,
        topicId,
        createdBy: compState.username,
        rootId,
        rawText,
        toxicityStatus,
      }
      return isTribunalComment ? createTribunalComment(comment) : createComment(comment)
    })

    setSubmitting(false)
    resetForm({})
    closeModal()
  }, [
    compState,
    content,
    rawText,
    modalProps.tribunalCommentUnderReviewId,
    modalProps.commentId,
    contentId,
  ])
}
