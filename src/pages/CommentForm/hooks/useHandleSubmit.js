import { useCallback } from 'react'
import { toast } from 'react-toastify'

import useBindDispatch from '../../hooks/redux/useBindDispatch'
import commentActions from '../../../redux/actions/comments'
import { checkToxicity } from '../../../api/v1/comments/comments_api_util'
import delay from '../../../generic/delay'

export default (compState, content, rawText, modalProps, subtopicId) => {
  const { createComment } = useBindDispatch(commentActions)
  return useCallback((values, { setSubmitting, resetForm }) => {
    // const { positive, negative, neutral } = values
    // let sentiment
    // if (positive) sentiment = 'positive'
    // if (neutral) sentiment = 'neutral'
    // if (negative) sentiment = 'negative'
    toast.promise(
      Promise.all([delay(1500), checkToxicity({ content: rawText })]),
      {
        pending: 'Analyzing Comment...',
        success: 'Thanks For Being Civil!',
        error: 'Promise rejected 🤯',
      },
    ).then(() => {
      createComment({
        ...values,
        content,
        memeFlag: false,
        parentId: modalProps?.commentId || null,
        subtopicId,
        createdBy: compState.username,
        rootId: compState.rootParentCommentId,
        rawText,
      })
    })

    setSubmitting(false)
    resetForm({})
  }, [compState, content, rawText, modalProps, subtopicId])
}
