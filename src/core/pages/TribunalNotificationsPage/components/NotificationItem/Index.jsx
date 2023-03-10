import React from 'react'
import { TribunalSelection, UserContentReported } from '../../../../../enums/notification_types'
import TribunalSelectionNotification from '../TribunalSelectionNotification/Index'
import UserContentReportedNotification from '../UserContentReportedNotification/Index'

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
    <ItemComponent notification={notification} />
  )
}

export default NotificationItem
