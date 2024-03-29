import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserInfoHeader from '../../../../../UserInfoHeader/Index'
import { longUsernameDisplay } from '../../../../../../../generic/string/longUsernameDisplay'
import { getTimeSince } from '../../../../../../../generic/string/dateFormatter'

function CommentHeader({
  commentData,
  spaceId,
}) {
  const navigate = useNavigate()
  const {
    createdAt, createdByUserData
  } = commentData
  return (
    <UserInfoHeader
      onClick={() => navigate(`/home/spaces/${spaceId}/discussions/${commentData.discussionId}/comments/${commentData.id}`)}
      time={getTimeSince(createdAt)}
      userData={createdByUserData}
   
    />
  )
}

export default CommentHeader
