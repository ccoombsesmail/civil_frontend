import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { notificationsApi } from '../../../api/services/notifications.ts'

import { CommentCivilityGiven, TribunalSelection, UserContentReported } from '../../../enums/notification_types'

export const addNewNotification = (event, draftNotifications) => {
  switch (event.eventType) {
    case TribunalSelection:
    case UserContentReported: {
      draftNotifications.tribunalNotifications.unshift(event.data)
      break
    }
    case CommentCivilityGiven: {
      draftNotifications.userNotifications.unshift(event.data)
      break
    }
    default: {
      draftNotifications.userNotifications.unshift(event.data)
      break
    }
  }

  return draftNotifications
}

export default (socket, userId) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (userId && socket.disconnected) {
      socket.connect()
      socket.on('connect', () => {
        socket.emit('addUser', { userId, socketId: socket.id })
        socket.on('notification', (event) => dispatch(
          notificationsApi.util.updateQueryData(
            'getAllNotifications',
            userId,
            (draftNotifications) => {
              addNewNotification(event, draftNotifications)
            },
          ),
        ))
      })
    }
  }, [userId])
}
