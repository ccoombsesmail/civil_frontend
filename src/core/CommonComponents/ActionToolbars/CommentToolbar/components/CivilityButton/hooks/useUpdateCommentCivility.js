import { useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useUpdateCommentCivilityMutation } from '../../../../../../../api/services/comments.ts'
import { useUpdateTribunalCommentCivilityMutation } from '../../../../../../../api/services/tribunal_comments.ts'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'
import { ParentCommentContext } from '../../../../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext'

export default (comment) => {
  const { isReplies, isFocusedComment, commentId } = useContext(ParentCommentContext) || {}
  const { pathname } = useLocation()
  const { currentUser } = useGetCurrentUser()
  const [updateCommentCivility] = useUpdateCommentCivilityMutation()
  const [updateTribunalCommentCivility] = useUpdateTribunalCommentCivilityMutation()

  return useCallback((e) => {
    const isTribunal = pathname.includes('tribunal')
    const data = {
      givingUserId: currentUser.id,
      receivingUserId: comment.createdByUserId,
      commentId,
      value: Number(e.currentTarget.value),
      isFocusedComment,
      isReplies,
      ...comment,
    }
    return isTribunal ? updateTribunalCommentCivility(data) : updateCommentCivility(data)
  }, [comment.civil])
}
