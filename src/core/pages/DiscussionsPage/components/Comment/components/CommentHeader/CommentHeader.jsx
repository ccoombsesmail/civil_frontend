import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserInfoHeader from '../../../../../../CommonComponents/UserInfoHeader/Index'
import { longUsernameDisplay } from '../../../../../../../generic/string/longUsernameDisplay'
import { getTimeSince } from '../../../../../../../generic/string/dateFormatter'

function CommentHeader({
  commentData,
  spaceId,
}) {
  const navigate = useNavigate()
  const {
    createdByIconSrc, createdByUsername, createdByUserId, createdByUserTag, createdAt,
  } = commentData
  return (
    <UserInfoHeader
      onClick={() => navigate(`/home/spaces/${spaceId}/discussions/${commentData.discussionId}/comments/${commentData.id}`)}
      time={getTimeSince(createdAt)}
      username={longUsernameDisplay(createdByUsername)}
      userId={createdByUserId}
      iconSrc={createdByIconSrc}
      userTag={createdByUserTag}
    />
  )
}

export default CommentHeader
