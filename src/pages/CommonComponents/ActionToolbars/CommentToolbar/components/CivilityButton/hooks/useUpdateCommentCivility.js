import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import commentActions from '../../../../../../../redux/actions/comments'

export default (comment) => {
  const dispatch = useDispatch()
  const user = useSelector((s) => s.session.currentUser)
  const { updateCommentCivility } = bindActionCreators(commentActions, dispatch)
  return useCallback((e) => {
    updateCommentCivility({
      givingUserId: user.id || user.userId,
      receivingUserId: comment.createdById,
      commentId: comment.id,
      value: Number(e.currentTarget.value),
    })
  }, [comment.civil])
}
