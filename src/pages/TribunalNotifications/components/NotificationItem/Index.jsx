import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TribunalSelection } from '../../../../enums/notification_types'
import TribunalSelectionNotification from '../TribunalSelectionNotification/Index'
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
