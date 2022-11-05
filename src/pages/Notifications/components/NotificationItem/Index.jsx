import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {
  NewFollower, CommentCivilityGiven, CommentLike, TopicLike,
} from '../../../../enums/notification_types'
import FollowNotifcation from '../FollowNotification/Index'
import CommentCivilityNotifcation from '../CommentCivilityNotification/Index'
import {
  Item,
} from './Style'
import CommentLikeNotification from '../LikeNotification/Index'
import TopicLikeNotification from '../TopicLikeNotification/Index'

const NotificationItem = ({ notification }) => {
  // const navigate = useNavigate()
  let ItemComponent
  let onClick
  switch (notification.eventType) {
    case NewFollower:
      // onClick = () => navigate(`/user/${notification.followerUserId}`)
      ItemComponent = FollowNotifcation
      break
    case CommentCivilityGiven:
      // onClick = () => navigate(`/user/${notification.givingUserId}`)
      ItemComponent = CommentCivilityNotifcation
      break
    case CommentLike:
      // onClick = () => navigate(`/user/${notification.givingUserId}`)
      ItemComponent = CommentLikeNotification
      break
    case TopicLike:
      // onClick = () => navigate(`/user/${notification.givingUserId}`)
      ItemComponent = TopicLikeNotification
      break
    default:
      break
  }
  return (
    <Item onClick={onClick}>
      <ItemComponent notification={notification} />
    </Item>
  )
}

export default NotificationItem
