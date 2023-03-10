import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {
  NewFollower, CommentCivilityGiven, CommentLike, TopicLike,
} from '../../../../../enums/notification_types'
import FollowNotifcation from '../FollowNotification/Index'
import CommentCivilityNotifcation from '../CommentCivilityNotification/Index'
import CommentLikeNotification from '../LikeNotification/Index'
import TopicLikeNotification from '../TopicLikeNotification/Index'

function NotificationItem({ notification }) {
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
    case TopicLike:
      ItemComponent = TopicLikeNotification
      break
    default:
      break
  }
  return (
    <ItemComponent notification={notification} />
  )
}

export default NotificationItem
