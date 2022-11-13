import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import commentActions from '../../../../../../../redux/actions/comments'
import tribunalCommentActions from '../../../../../../../redux/actions/tribunal_comments/index'
import useBindDispatch from '../../../../../../hooks/redux/useBindDispatch'

export default (comment) => {
  const { pathname } = useLocation()
  const user = useSelector((s) => s.session.currentUser)
  const {
    updateCommentCivility,
    updateTribunalCommentCivility,
  } = useBindDispatch(tribunalCommentActions, commentActions)

  return useCallback((e) => {
    const isTribunal = pathname.includes('tribunal')
    const data = {
      givingUserId: user.id,
      receivingUserId: comment.createdById,
      commentId: comment.id,
      value: Number(e.currentTarget.value),
    }
    return isTribunal ? updateTribunalCommentCivility(data) : updateCommentCivility(data)
  }, [comment.civil])
}
