import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import commentActions from '../../../../../redux/actions/comments'

export default (comment, rootComment, user) => {
  const increment = rootComment !== undefined ? !rootComment.liked : !comment.liked
  const dispatch = useDispatch()
  const { updateCommentLikes } = bindActionCreators(commentActions, dispatch)
  return useCallback(() => {
    updateCommentLikes({id: comment.id, userId: user?.id, increment})
  }, [comment.liked || rootComment?.liked])
}