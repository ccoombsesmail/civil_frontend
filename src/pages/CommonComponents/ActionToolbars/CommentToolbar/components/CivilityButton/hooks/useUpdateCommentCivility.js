import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import commentActions from '../../../../../../../redux/actions/comments'

export default (comment) => {
  const dispatch = useDispatch()
  const { updateCommentCivility } = bindActionCreators(commentActions, dispatch)
  return useCallback((e) => {
    updateCommentCivility({
      userId: comment.createdById, commentId: comment.id, value: Number(e.currentTarget.value),
    })
  }, [comment.civil])
}
