import React, { memo, useCallback, useContext } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'

import CommentButton from './components/CommentButton/Index'
import OpposingViewsButton from './components/OpposingViewsButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage.ts'
import useUpdateSpaceLikes from './hooks/useUpdateSpaceLikes.ts'
import { SPACE } from '../../../../enums/content_type'
import { LoginFormVisibleStateContext } from '../../../../LoginFormVisibleStateContext'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

function SpaceActionToolbar({
  hideCommentButton, space,
}) {
  const { likes } = space
  const { spaceId, discussionId } = useParams()
  const { isOnTribunalPage } = useDetectCurrentPage()
  const { currentUser } = useGetCurrentUser()
  const {handleUpdateLikes: updateSpaceLikesUpvote, isLoading: isUpvoteLoading} = useUpdateSpaceLikes(space, 'upvote')
  const {handleUpdateLikes: updateSpaceLikesDownvote, isLoading: isDownvoteLoading} = useUpdateSpaceLikes(space, 'downvote')

  const { setLoginFormVisible } = useContext(LoginFormVisibleStateContext)
  const handleUpvoteClick = useCallback(() => {
    if (currentUser) updateSpaceLikesUpvote()
    else setLoginFormVisible(true)
  }, [updateSpaceLikesUpvote])

  const handleDownvoteClick = useCallback(() => {
    if (currentUser) updateSpaceLikesDownvote()
    else setLoginFormVisible(true)
  }, [updateSpaceLikesDownvote])

  return (
    <Container>
      <Left>
        <UpVoteButton updateLikes={handleUpvoteClick} content={space} action="upvote" disabled={isUpvoteLoading} />
        <span>
          {likes || 0}
        </span>
        <DownVoteButton content={space} updateLikes={handleDownvoteClick} action="downvote" disabled={isDownvoteLoading} />
        { hideCommentButton ? null : <CommentButton space={space} />}
      </Left>
      <Right>
        {!isOnTribunalPage && <OpposingViewsButton spaceId={spaceId} discussionId={discussionId} /> }
        {!isOnTribunalPage && <TribunalButton contentId={space?.id} contentType={SPACE} /> }
      </Right>
    </Container>
  )
}

export default memo(SpaceActionToolbar)
