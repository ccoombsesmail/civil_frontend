import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

// import { BiComment } from 'react-icons/bi'
// import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

import { CommentSvg, LikeSvg, LikeClickedSvg } from '../../../svgs/svgs'

import IconButton from '../IconButton/Index'
import { Container } from './Style/index'
import commentActions from '../../../redux/actions/comments/index'

const CommentActions = ({ commentId, liked }) => {
  const dispatch = useDispatch()
  const { updateCommentLikes } = bindActionCreators(commentActions, dispatch)
  const comments = useSelector((s) => s.comments.list)
  const user = useSelector((s) => s.session.currentUser)
  const thisComment = comments.find(({ id }) => id === commentId)

  const updateLikes = useCallback(() => {
    updateCommentLikes({ id: commentId, userId: user?.id, increment: !liked })
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
