import { useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useUpdateCommentCivilityMutation } from '../../../../../../../api/services/comments.ts'
import { useUpdateTribunalCommentCivilityMutation } from '../../../../../../../api/services/tribunal_comments.ts'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'
import { ParentCommentContext } from '../../../../../InfiniteLoaders/ContentItems/CommentItem/ParentCommentContext.tsx'

export default (comment) => {
  const {
    id, createdByUserId, rootId, parentId, discussionId,
  } = comment || {}

  const {
    isReplies, isFocusedComment, currentPage, rootOfCommentReplyThreadId, reportedContentId, commentType, focusedCommentId,
  } = useContext(ParentCommentContext) || {}

  const { pathname } = useLocation()
  const { currentUser } = useGetCurrentUser()
  const [updateCommentCivility] = useUpdateCommentCivilityMutation()
  const [updateTribunalCommentCivility] = useUpdateTribunalCommentCivilityMutation()

  return useCallback((e) => {
    const isTribunal = pathname.includes('tribunal')
    const data = {
      id,
      commentId: id,
      discussionId,
      parentId,
      rootId,
      createdByUserId,
      givingUserId: currentUser.id,
      receivingUserId: comment.createdByUserId,
      value: Number(e.currentTarget.value),
      isFocusedComment,
      isReplies,
      currentPage,
      rootOfCommentReplyThreadId,
      reportedContentId,
      commentType,
      focusedCommentId,
    }
    return isTribunal ? updateTribunalCommentCivility(data) : updateCommentCivility(data)
  }, [comment])
}
