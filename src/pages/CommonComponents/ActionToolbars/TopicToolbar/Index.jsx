import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'

import CommentButton from './components/CommentButton/Index'
import OpposingViewsButton from './components/OpposingViewsButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import { TOPIC } from '../../../../enums/content_type'

const TopicActionToolbar = ({
  likes, topic, user,
}) => {
  const { topicId, subTopicId, ...params } = useParams()
  return (
    <Container>
      <Left>
        <UpVoteButton content={topic} user={user} contentType={TOPIC} />
        <span>
          {likes || 0}
        </span>
        <DownVoteButton content={topic} user={user} contentType={TOPIC} />
        { params['*'] && <CommentButton />}
      </Left>
      <Right>
        <OpposingViewsButton topicId={topicId} subTopicId={subTopicId} />
        <TribunalButton contentId={topic?.id} />
      </Right>
    </Container>
  )
}

export default memo(TopicActionToolbar)
