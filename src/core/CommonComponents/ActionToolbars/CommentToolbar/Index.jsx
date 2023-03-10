import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'
import CommentButton from './components/CommentButton/Index'
import CivilityButton from './components/CivilityButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import { COMMENT, TRIBUNAL_COMMENT } from '../../../../enums/content_type'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage'

function CommentActionToolbar({
  likes, comment, user,
}) {
  const {
    topicId, discussionId, contentId, ...params
  } = useParams()
  const isTribunalComment = comment.commentType
  const { isOnTribunalPage } = useDetectCurrentPage()
  return (
    <Container>
      <Left>
        <UpVoteButton
          content={comment}
          user={user}
          contentType={isTribunalComment ? TRIBUNAL_COMMENT : COMMENT}
          disabled={isOnTribunalPage && contentId === comment?.id}
        />
        <span>
          {likes || 0}
        </span>
        <DownVoteButton
          content={comment}
          user={user}
          contentType={isTribunalComment ? TRIBUNAL_COMMENT : COMMENT}
          disabled={isOnTribunalPage && contentId === comment?.id}
        />
        { params['*'] && <CommentButton comment={comment} />}
        { (isOnTribunalPage && contentId === comment?.id) ? null : (
          <CivilityButton
            comment={comment}
          />
        )}
      </Left>
      <Right>
        { !isOnTribunalPage && <TribunalButton contentId={comment?.id} /> }
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
