import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'
import CommentButton from './components/CommentButton/Index'
import CivilityButton from './components/CivilityButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage.ts'
import useUpdateCommentLikes from './hooks/useUpdateCommentLikes.ts'

function CommentActionToolbar({
  comment,
}) {
  const { likes } = comment
  const {
    spaceId, discussionId, contentId, ...params
  } = useParams()
  const { isOnTribunalPage } = useDetectCurrentPage()

  const {handleUpdateLikes: updateCommentLikesUpvote, isLoading: isUpvoteLoading} = useUpdateCommentLikes(comment, 'upvote', isOnTribunalPage)
  const {handleUpdateLikes: updateCommentLikesDownvote, isLoading: isDownvoteLoading} = useUpdateCommentLikes(comment, 'downvote', isOnTribunalPage)
  return (
    <Container>
      <Left>
        <UpVoteButton
          content={comment}
          disabled={(isOnTribunalPage && contentId === comment?.id) || isUpvoteLoading}
          updateLikes={updateCommentLikesUpvote}
        />
        <span>
          {likes || 0}
        </span>
        <DownVoteButton
          content={comment}
          disabled={(isOnTribunalPage && contentId === comment?.id) || isDownvoteLoading}
          updateLikes={updateCommentLikesDownvote}
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
