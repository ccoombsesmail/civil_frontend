import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import LikeButton from './components/LikeButton/Index'
import CommentButton from './components/CommentButton/Index'
import CivilityButton from './components/CivilityButton/Index'
import TribunalButton from './components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'

const CommentActionToolbar = ({
  likes, comment, user,
}) => {
  const { topicId, subTopicId, ...params } = useParams()
  return (
    <Container>
      <Left>
        <LikeButton comment={comment} user={user} />
        { params['*'] && <CommentButton comment={comment} />}
        <CivilityButton comment={comment} />
      </Left>
      <Right>
        {/* <OpposingViewsButton topicId={topicId} subTopicId={subTopicId} /> */}
        <TribunalButton />
        <span>
          {likes || 0}
          {' '}
          likes
        </span>
      </Right>
    </Container>
  )
}

export default memo(CommentActionToolbar)
