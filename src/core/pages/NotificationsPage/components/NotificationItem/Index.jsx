import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {
  NewFollower, CommentCivilityGiven, CommentLike, SpaceLike, DiscussionLike,
} from '../../../../../enums/notification_types'
import FollowNotifcation from '../FollowNotification/Index'
import CommentCivilityNotifcation from '../CommentCivilityNotification/Index'
import CommentLikeNotification from '../LikeNotification/Index'
import LikeNotification from '../SpaceLikeNotification/Index'

function NotificationItem({ notification }) {
  let error = false
  let component = null
  const { eventType } = notification
  switch (eventType) {
    case NewFollower:
      component = <FollowNotifcation notification={notification}/>
      break
    case CommentCivilityGiven:
      component = <CommentCivilityNotifcation notification={notification} />
      break
    case CommentLike:
      component = <CommentLikeNotification notification={notification} />
      break
    case SpaceLike:
      component = <LikeNotification notification={notification} contentType="Space" eventType={eventType} />
      break
    case DiscussionLike:
      component = <LikeNotification notification={notification} contentType="Discussion" eventType={eventType} />
      break
    default:
      error = true
      break
  }

  if (error) return null
  return component
}

export default NotificationItem
