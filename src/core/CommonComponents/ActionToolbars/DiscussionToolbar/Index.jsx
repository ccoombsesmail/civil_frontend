import React, { memo, useCallback, useContext } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'

import CommentButton from './components/CommentButton/Index'
import OpposingViewsButton from './components/OpposingViewsButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage.ts'
import useUpdateDiscussionLikes from './hooks/useUpdateDiscussionLikes.ts'
import { DISCUSSION } from '../../../../enums/content_type'
import { LoginFormVisibleStateContext } from '../../../../LoginFormVisibleStateContext'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import TippingButton from '../components/TippingButton/TippingButton'

function DiscussionActionToolbar({
  discussion, updateGetDiscussionQuery,
}) {
  const { likes } = discussion
  const { spaceId, discussionId } = useParams()
  const { isOnTribunalPage, isOnHomePage} = useDetectCurrentPage()
  const { currentUser } = useGetCurrentUser()
  const { handleUpdateLikes: updateDiscussionLikesUpvote, isLoading: isUpvoteLoading} = useUpdateDiscussionLikes(discussion, 'upvote', updateGetDiscussionQuery)
  const { handleUpdateLikes: updateDiscussionLikesDownvote, isLoading: isDonwvoteLoading} = useUpdateDiscussionLikes(discussion, 'downvote', updateGetDiscussionQuery)

  const { setLoginFormVisible } = useContext(LoginFormVisibleStateContext)
  const handleUpvoteClick = useCallback(() => {
    if (currentUser) updateDiscussionLikesUpvote()
    else setLoginFormVisible(true)
  }, [updateDiscussionLikesUpvote])

  const handleDownvoteClick = useCallback(() => {
    if (currentUser) updateDiscussionLikesDownvote()
    else setLoginFormVisible(true)
  }, [updateDiscussionLikesDownvote])
  return (
    <Container>
      <Left>
        <UpVoteButton content={discussion} updateLikes={handleUpvoteClick} disabled={isUpvoteLoading} />
        <span>
          {likes || 0}
        </span>

        <DownVoteButton content={discussion} updateLikes={handleDownvoteClick} disabled={isDonwvoteLoading} />
        {!isOnHomePage && <CommentButton discussion={discussion} /> }
      </Left>
      <Right>
        {!isOnTribunalPage && <OpposingViewsButton spaceId={spaceId} discussionId={discussionId} /> }
        {!isOnTribunalPage && <TribunalButton contentId={discussion?.id} contentType={DISCUSSION} /> }
        <TippingButton receiverPublicKey={discussion.createdByUserId} />
      </Right>
    </Container>
  )
}

export default memo(DiscussionActionToolbar)
