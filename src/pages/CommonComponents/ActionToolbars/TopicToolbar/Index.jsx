import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from './components/UpVoteButton/Index'
import DownVoteButton from './components/DownVoteButton/Index'

import CommentButton from './components/CommentButton/Index'
import OpposingViewsButton from './components/OpposingViewsButton/Index'
import TribunalButton from './components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'

const TopicActionToolbar = ({
  likes, topic, user,
}) => {
  // const positiveCivility = (civil == null) ? 1 : -1
  // const negativeCivility = (civil == null) ? -1 : 1
  // const removeCivility = civil || (civil === false)
  const { topicId, subTopicId, ...params } = useParams()
  return (
    <Container>
      <Left>
        <UpVoteButton topic={topic} user={user} />
        <span>
          {likes || 0}
          {/* {' '}
          likes */}
        </span>
        <DownVoteButton topic={topic} user={user} />
        { params['*'] && <CommentButton />}
      </Left>
      <Right>
        <OpposingViewsButton topicId={topicId} subTopicId={subTopicId} />
        <TribunalButton topicId={topic?.id} />
      </Right>
    </Container>
  )
}

export default memo(TopicActionToolbar)
