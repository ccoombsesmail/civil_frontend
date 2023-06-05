import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'

import CommentButton from './components/CommentButton/Index'
import OpposingViewsButton from './components/OpposingViewsButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage.ts'
import useUpdateSpaceLikes from './hooks/useUpdateSpaceLikes.ts'

function SpaceActionToolbar({
  space, hideCommentButton,
}) {
  const { likes } = space
  const { spaceId, discussionId } = useParams()
  const { isOnTribunalPage } = useDetectCurrentPage()
  const {handleUpdateLikes: updateSpaceLikesUpvote, isLoading: isUpvoteLoading} = useUpdateSpaceLikes(space, 'upvote')
  const {handleUpdateLikes: updateSpaceLikesDownvote, isLoading: isDownvoteLoading} = useUpdateSpaceLikes(space, 'downvote')

  return (
    <Container>
      <Left>
        <UpVoteButton updateLikes={updateSpaceLikesUpvote} content={space} action="upvote" disabled={isUpvoteLoading} />
        <span>
          {likes || 0}
        </span>
        <DownVoteButton content={space} updateLikes={updateSpaceLikesDownvote} action="downvote" disabled={isDownvoteLoading} />
        { hideCommentButton ? null : <CommentButton space={space} />}
      </Left>
      <Right>
        {!isOnTribunalPage && <OpposingViewsButton spaceId={spaceId} discussionId={discussionId} /> }
        {!isOnTribunalPage && <TribunalButton contentId={space?.id} /> }
      </Right>
    </Container>
  )
}

export default memo(SpaceActionToolbar)
