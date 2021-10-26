import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import commentActions from '../../../../../redux/actions/comments'

export default (comment, user) => {
  const increment = !comment.liked
  const dispatch = useDispatch()
  const { updateCommentLikes } = bindActionCreators(commentActions, dispatch)
  return useCallback(() => {
    updateCommentLikes({ id: comment.id, userId: user?.id, increment })
  }, [comment.liked])
}
