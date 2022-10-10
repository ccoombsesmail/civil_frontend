import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TribunalSelection, UserContentReported } from '../../../../enums/notification_types'
import TribunalSelectionNotification from '../TribunalSelectionNotification/Index'
import UserContentReportedNotification from '../UserContentReportedNotification/Index'
import {
  Item,
} from './Style'

const NotificationItem = ({ notification }) => {
  const navigate = useNavigate()
  let ItemComponent
  let onClick
  switch (notification.eventType) {
    case TribunalSelection:
      onClick = () => navigate(`/tribunal/${notification.contentType}/${notification.reportedContentId}`)
      ItemComponent = TribunalSelectionNotification
      break
    case UserContentReported:
      onClick = () => navigate(`/tribunal/${notification.contentType}/${notification.reportedContentId}`)
      ItemComponent = UserContentReportedNotification
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
