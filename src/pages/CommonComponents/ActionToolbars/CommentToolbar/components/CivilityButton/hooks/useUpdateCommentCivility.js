import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useUpdateCommentCivilityMutation } from '../../../../../../../api/services/comments'
import commentActions from '../../../../../../../redux/actions/comments'
import tribunalCommentActions from '../../../../../../../redux/actions/tribunal_comments/index'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'
import useBindDispatch from '../../../../../../hooks/redux/useBindDispatch'

export default (comment) => {
  const { pathname } = useLocation()
  const { currentUser } = useGetCurrentUser()
  const [updateCommentCivility, {}] = useUpdateCommentCivilityMutation()

  const {
    updateTribunalCommentCivility,
  } = useBindDispatch(tribunalCommentActions, commentActions)

  return useCallback((e) => {
    const isTribunal = pathname.includes('tribunal')
    const data = {
      givingUserId: currentUser.id,
      receivingUserId: comment.createdById,
      commentId: comment.id,
      value: Number(e.currentTarget.value),
      ...comment
    }
    return isTribunal ? updateTribunalCommentCivility(data) : updateCommentCivility(data)
  }, [comment.civil])
}
