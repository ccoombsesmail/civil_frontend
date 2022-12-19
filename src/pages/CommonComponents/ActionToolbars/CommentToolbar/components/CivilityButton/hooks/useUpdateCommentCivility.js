import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useUpdateCommentCivilityMutation } from '../../../../../../../api/services/comments'
import { useUpdateTribunalCommentCivilityMutation } from '../../../../../../../api/services/tribunal_comments'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'

export default (comment) => {
  const { pathname } = useLocation()
  const { currentUser } = useGetCurrentUser()
  const [updateCommentCivility, {}] = useUpdateCommentCivilityMutation()
  const [updateTribunalCommentCivility, {}] = useUpdateTribunalCommentCivilityMutation()

  return useCallback((e) => {
    const isTribunal = pathname.includes('tribunal')
    const data = {
      givingUserId: currentUser.id,
      receivingUserId: comment.createdById,
      commentId: comment.id,
      value: Number(e.currentTarget.value),
      ...comment,
    }
    return isTribunal ? updateTribunalCommentCivility(data) : updateCommentCivility(data)
  }, [comment.civil])
}
