import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'
import CommentButton from './components/CommentButton/Index'
import CivilityButton from './components/CivilityButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import { COMMENT, TRIBUNAL_COMMENT } from '../../../../enums/content_type'

const CommentActionToolbar = ({
  likes, comment, user,
}) => {
  const { topicId, subTopicId, ...params } = useParams()
  const isTribunalComment = comment.commentType
  return (
    <Container>
      <Left>
        <UpVoteButton
          content={comment}
          user={user}
          contentType={isTribunalComment ? TRIBUNAL_COMMENT : COMMENT}
        />
        <span>
          {likes || 0}
        </span>
        <DownVoteButton
          content={comment}
          user={user}
          contentType={isTribunalComment ? TRIBUNAL_COMMENT : COMMENT}
        />
        { params['*'] && <CommentButton comment={comment} />}
        <CivilityButton comment={comment} />
      </Left>
      <Right>
        <TribunalButton contentId={comment?.id} />
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
