import React from 'react'
import { TribunalSelection, UserContentReported } from '../../../../../enums/notification_types'
import TribunalSelectionNotification from '../TribunalSelectionNotification/Index'
import UserContentReportedNotification from '../UserContentReportedNotification/Index'
import {
  Item,
} from './Style'

function NotificationItem({ notification }) {
  let ItemComponent
  switch (notification.eventType) {
    case TribunalSelection:
      ItemComponent = TribunalSelectionNotification
      break
    case UserContentReported:
      ItemComponent = UserContentReportedNotification
      break
    default:
      break
  }
  return (
    <Item>
      <ItemComponent notification={notification} />
    </Item>
  )
}

export default NotificationItem
