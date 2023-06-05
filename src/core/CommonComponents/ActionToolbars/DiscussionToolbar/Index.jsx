import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'

import CommentButton from './components/CommentButton/Index'
import OpposingViewsButton from './components/OpposingViewsButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage.ts'
import useUpdateDiscussionLikes from './hooks/useUpdateDiscussionLikes.ts'

function DiscussionActionToolbar({
  discussion, updateGetDiscussionQuery,
}) {
  const { likes } = discussion
  const { spaceId, discussionId } = useParams()
  const { isOnTribunalPage } = useDetectCurrentPage()
  const { handleUpdateLikes: updateDiscussionLikesUpvote, isLoading: isUpvoteLoading} = useUpdateDiscussionLikes(discussion, 'upvote', updateGetDiscussionQuery)
  const { handleUpdateLikes: updateDiscussionLikesDownvote, isLoading: isDonwvoteLoading} = useUpdateDiscussionLikes(discussion, 'downvote', updateGetDiscussionQuery)

  return (
    <Container>
      <Left>
        <UpVoteButton content={discussion} updateLikes={updateDiscussionLikesUpvote} disabled={isUpvoteLoading} />
        <span>
          {likes || 0}
        </span>

        <DownVoteButton content={discussion} updateLikes={updateDiscussionLikesDownvote} disabled={isDonwvoteLoading} />
        <CommentButton discussion={discussion} />
      </Left>
      <Right>
        {!isOnTribunalPage && <OpposingViewsButton spaceId={spaceId} discussionId={discussionId} /> }
        {!isOnTribunalPage && <TribunalButton contentId={discussion?.id} /> }
      </Right>
    </Container>
  )
}

export default memo(DiscussionActionToolbar)
