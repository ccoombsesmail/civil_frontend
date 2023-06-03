import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'

import CommentButton from './components/CommentButton/Index'
import OpposingViewsButton from './components/OpposingViewsButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import { SPACE } from '../../../../enums/content_type'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage.ts'
import useUpdateDiscussionLikes from './hooks/useUpdateDiscussionLikes.ts'

function DiscussionActionToolbar({
  likes, discussion, user, hideCommentButton, currentPage,
}) {
  const { spaceId, discussionId } = useParams()
  const { isOnTribunalPage } = useDetectCurrentPage()
  const updateDiscussionLikes = useUpdateDiscussionLikes(discussion)
  return (
    <Container>
      <Left>
        <UpVoteButton updateLikes={updateDiscussionLikes} content={discussion} user={user} contentType={SPACE} currentPage={currentPage} />
        <span>
          {likes || 0}
        </span>
        <DownVoteButton content={discussion} user={user} contentType={SPACE} currentPage={currentPage} />
        { hideCommentButton ? null : <CommentButton discussion={discussion} />}
      </Left>
      <Right>
        {!isOnTribunalPage && <OpposingViewsButton spaceId={spaceId} discussionId={discussionId} /> }
        {!isOnTribunalPage && <TribunalButton contentId={discussion?.id} /> }
      </Right>
    </Container>
  )
}

export default memo(DiscussionActionToolbar)
