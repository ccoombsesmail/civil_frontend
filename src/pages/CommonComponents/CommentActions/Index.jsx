import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import {BiLike, BiComment} from 'react-icons/bi'
import IconButton from '../IconButton/Index'
import {Container} from './Style/index'
import commentActions from '../../../redux/actions/comments/index'

const CommentActions = ({ commentId, liked }) => {
  const dispatch = useDispatch()
  const { updateCommentLikes } = bindActionCreators(commentActions, dispatch)

  const updateLikes = useCallback(() => {
    updateCommentLikes({id: commentId, userId: user?.id, increment: true})
    }, [commentId])

  const comments = useSelector(s => s.comments.list)
  const user = useSelector(s => s.session.currentUser)
  const thisComment = comments.find(({ id }) => id === commentId)
  return (
    <Container>
      <IconButton icon={<BiLike />} onClick={updateLikes} disabled={liked}> 
        {thisComment?.likes}
      </IconButton>
      <IconButton icon={<BiComment />} />
    </Container>
  )

}

export default CommentActions