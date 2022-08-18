import { useCallback } from 'react'
import { toast } from 'react-toastify'

import useBindDispatch from '../../hooks/redux/useBindDispatch'
import commentActions from '../../../redux/actions/comments'
import tribunalCommentActions from '../../../redux/actions/tribunal_comments'

import { checkToxicity } from '../../../api/v1/comments/comments_api_util'
import delay from '../../../generic/delay'
import useDetectCurrentPage from '../../hooks/routing/useDetectCurrentPage'

export default (compState, content, rawText, modalProps, contentId) => {
  const { isOnTribunalPage: isTribunalComment } = useDetectCurrentPage()

  const {
    tribunalCommentUnderReviewId,
    commentId,
  } = modalProps || {}

  const isParentTribunalCommentUnderReview = isTribunalComment
  && tribunalCommentUnderReviewId === commentId

  const parentId = isParentTribunalCommentUnderReview ? null : commentId || null
  const rootId = isParentTribunalCommentUnderReview ? null : compState.rootParentCommentId

  const {
    createComment,
    createTribunalComment,
  } = useBindDispatch(commentActions, tribunalCommentActions)

  return useCallback((values, { setSubmitting, resetForm }) => {
    toast.promise(
      Promise.all([delay(1500), checkToxicity({ content: rawText })]),
      {
        pending: 'Analyzing Comment...',
        success: 'Thanks For Being Civil!',
        error: 'Promise rejected 🤯',
      },
    ).then(() => {
      const comment = {
        ...values,
        content,
        memeFlag: false,
        parentId,
        contentId,
        subtopicId: contentId,
        createdBy: compState.username,
        rootId,
        rawText,
      }
      return isTribunalComment ? createTribunalComment(comment) : createComment(comment)
    })

    setSubmitting(false)
    resetForm({})
  }, [
    compState,
    content,
    rawText,
    modalProps.tribunalCommentUnderReviewId,
    modalProps.commentId,
    contentId,
  ])
}
