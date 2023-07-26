import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {
  NewFollower, CommentCivilityGiven, CommentLike, SpaceLike,
} from '../../../../../enums/notification_types'
import FollowNotifcation from '../FollowNotification/Index'
import CommentCivilityNotifcation from '../CommentCivilityNotification/Index'
import CommentLikeNotification from '../LikeNotification/Index'
import SpaceLikeNotification from '../SpaceLikeNotification/Index'
import { ErrorMessage } from '../../../../../api/util/ErrorMessage'

function NotificationItem({ notification }) {
  let error = false
  let ItemComponent
  switch (notification.eventType) {
    case NewFollower:
      ItemComponent = FollowNotifcation
      break
    case CommentCivilityGiven:
      ItemComponent = CommentCivilityNotifcation
      break
    case CommentLike:
      ItemComponent = CommentLikeNotification
      break
    case SpaceLike:
      ItemComponent = SpaceLikeNotification
      break
    default:
      error = true
      break
  }

  if (error) return null
  return (
    <ItemComponent notification={notification} />
  )
}

export default NotificationItem
