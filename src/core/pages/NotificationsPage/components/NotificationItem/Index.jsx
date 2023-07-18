import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {
  NewFollower, CommentCivilityGiven, CommentLike, SpaceLike,
} from '../../../../../enums/notification_types'
import FollowNotifcation from '../FollowNotification/Index'
import CommentCivilityNotifcation from '../CommentCivilityNotification/Index'
import CommentLikeNotification from '../LikeNotification/Index'
import SpaceLikeNotification from '../SpaceLikeNotification/Index'

function NotificationItem({ notification }) {
  let ItemComponent
  console.log(notification.eventType)
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
      break
  }
  return (
    <ItemComponent notification={notification} />
  )
}

export default NotificationItem
