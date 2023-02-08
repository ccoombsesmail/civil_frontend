import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CommentSvg, LikeSvg, LikeClickedSvg } from '../../../svgs/svgs'

import IconButton from '../IconButton/Index'
import { Container } from './Style/index'
import commentActions from '../../../redux/actions/comments/index'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'

function CommentActions({ commentId, liked }) {
  const dispatch = useDispatch()
  const { updateCommentLikes } = bindActionCreators(commentActions, dispatch)
  const comments = useSelector((s) => s.comments.list)
  const { currentUser } = useGetCurrentUser()
  const thisComment = comments.find(({ id }) => id === commentId)

  const updateLikes = useCallback(() => {
    updateCommentLikes({ id: commentId, userId: currentUser?.id, increment: !liked })
  }, [commentId, liked])

  return (
    <Container>
      <div>
        <IconButton icon={liked ? <LikeClickedSvg color="#F44336" /> : <LikeSvg />} onClick={updateLikes} />
        <IconButton icon={<CommentSvg />} />
      </div>
      <div>
        <span>
          {thisComment?.likes}
          {' '}
          likes
        </span>
      </div>
    </Container>
  )
}

export default CommentActions
