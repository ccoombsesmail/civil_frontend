import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UpVoteButton from '../components/UpVoteButton/Index'
import DownVoteButton from '../components/DownVoteButton/Index'

import CommentButton from './components/CommentButton/Index'
import OpposingViewsButton from './components/OpposingViewsButton/Index'
import TribunalButton from '../components/TribunalButton/Index'

import { Container, Left, Right } from '../Style/index'
import { SPACE } from '../../../../enums/content_type'
import useDetectCurrentPage from '../../../hooks/routing/useDetectCurrentPage'

const SpaceActionToolbar = ({
  likes, space, user, hideCommentButton, discussion, currentPage  
}) => {
  const { spaceId, discussionId } = useParams()
  const { isOnTribunalPage } = useDetectCurrentPage()
  return (
    <Container>
      <Left>
        <UpVoteButton content={space} user={user} contentType={SPACE} currentPage={currentPage} />
        <span>
          {likes || 0}
        </span>
        <DownVoteButton content={space} user={user} contentType={SPACE}  currentPage={currentPage}/>
        { hideCommentButton ? null : <CommentButton discussion={discussion} space={space} />}
      </Left>
      <Right>
        {!isOnTribunalPage && <OpposingViewsButton spaceId={spaceId} discussionId={discussionId} /> }
        {!isOnTribunalPage && <TribunalButton contentId={space?.id} /> }
      </Right>
    </Container>
  )
}

export default memo(SpaceActionToolbar)
