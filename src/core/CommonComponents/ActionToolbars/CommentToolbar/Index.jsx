import React, { memo, useCallback, useContext } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'
import CommentButton from './components/CommentButton/Index'
import CivilityButton from './components/CivilityButton/Index'
import TribunalButton from '../components/TribunalButton/Index'
import TippingButton from '../components/TippingButton/TippingButton'

import { Container, Left, Right } from '../Style/index'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage.ts'
import useUpdateCommentLikes from './hooks/useUpdateCommentLikes.ts'
import { COMMENT } from '../../../../enums/content_type'
import { LoginFormVisibleStateContext } from '../../../../LoginFormVisibleStateContext'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

function CommentActionToolbar({
  comment,
}) {
  const { likes, createdByUserData } = comment
  const {
    spaceId, discussionId, contentId, ...params
  } = useParams()
  const { isOnTribunalPage } = useDetectCurrentPage()
  const { currentUser } = useGetCurrentUser()

  const {handleUpdateLikes: updateCommentLikesUpvote, isLoading: isUpvoteLoading} = useUpdateCommentLikes(comment, 'upvote', isOnTribunalPage)
  const {handleUpdateLikes: updateCommentLikesDownvote, isLoading: isDownvoteLoading} = useUpdateCommentLikes(comment, 'downvote', isOnTribunalPage)

  const { setLoginFormVisible } = useContext(LoginFormVisibleStateContext)
  const handleUpvoteClick = useCallback(() => {
    if (currentUser) updateCommentLikesUpvote()
    else setLoginFormVisible(true)
  }, [updateCommentLikesUpvote])

  const handleDownvoteClick = useCallback(() => {
    if (currentUser) updateCommentLikesDownvote()
    else setLoginFormVisible(true)
  }, [updateCommentLikesDownvote])

  return (
    <Container>
      <Left>
        <UpVoteButton
          content={comment}
          disabled={(isOnTribunalPage && contentId === comment?.id) || isUpvoteLoading}
          updateLikes={handleUpvoteClick}
        />
        <span>
          {likes || 0}
        </span>
        <DownVoteButton
          content={comment}
          disabled={(isOnTribunalPage && contentId === comment?.id) || isDownvoteLoading}
          updateLikes={handleDownvoteClick}
        />
        { params['*'] && <CommentButton comment={comment} />}
        { (isOnTribunalPage && contentId === comment?.id) ? null : (
          <CivilityButton
            comment={comment}
          />
        )}
      </Left>
      <Right>
        {/* <span>
          {likes || 0}
          {' '}
          likes
        </span> */}
        <div className='flex'>
          <TippingButton receiverPublicKey={createdByUserData.createdByUserId} />
          { !isOnTribunalPage && <TribunalButton contentId={comment?.id} contentType={COMMENT} /> }

        </div>
      </Right>
    </Container>
  )
}

export default memo(CommentActionToolbar)
