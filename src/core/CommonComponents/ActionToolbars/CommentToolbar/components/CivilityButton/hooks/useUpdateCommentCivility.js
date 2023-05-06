import { useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useUpdateCommentCivilityMutation } from '../../../../../../../api/services/comments.ts'
import { useUpdateTribunalCommentCivilityMutation } from '../../../../../../../api/services/tribunal_comments.ts'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'
import { ParentCommentContext } from '../../../../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext'

export default (comment) => {
  const { isReplies, isFocusedComment, commentId, currentPage, rootOfCommentReplyThreadId, reportedContentId, commentType } = useContext(ParentCommentContext) || {}
  const { pathname } = useLocation()
  const { currentUser } = useGetCurrentUser()
  const [updateCommentCivility] = useUpdateCommentCivilityMutation()
  const [updateTribunalCommentCivility] = useUpdateTribunalCommentCivilityMutation()

  console.log(rootOfCommentReplyThreadId)
  return useCallback((e) => {
    const isTribunal = pathname.includes('tribunal')
    const data = {
      givingUserId: currentUser.id,
      receivingUserId: comment.createdByUserId,
      value: Number(e.currentTarget.value),
      ...comment,
      isFocusedComment,
      isReplies,
      currentPage,
      rootOfCommentReplyThreadId,
      reportedContentId,
      commentType,
      commentId: comment.id,
      rootId: rootOfCommentReplyThreadId
    }
    return isTribunal ? updateTribunalCommentCivility(data) : updateCommentCivility(data)
  }, [comment.civil])
}
