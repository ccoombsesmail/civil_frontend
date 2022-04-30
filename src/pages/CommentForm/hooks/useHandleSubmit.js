import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'

import useBindDispatch from '../../hooks/redux/useBindDispatch'
import commentActions from '../../../redux/actions/comments'
import tribunalCommentActions from '../../../redux/actions/tribunal_comments'

import { checkToxicity } from '../../../api/v1/comments/comments_api_util'
import delay from '../../../generic/delay'

export default (compState, content, rawText, modalProps, contentId) => {
  const { pathname } = useLocation()
  const isTribunalComment = pathname.includes('tribunal')
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
        parentId: modalProps?.commentId || null,
        contentId,
        subtopicId: contentId,
        createdBy: compState.username,
        rootId: compState.rootParentCommentId,
        rawText,
      }
      return isTribunalComment ? createTribunalComment(comment) : createComment(comment)
    })

    setSubmitting(false)
    resetForm({})
  }, [compState, content, rawText, modalProps, contentId])
}
