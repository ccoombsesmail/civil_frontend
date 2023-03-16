/* eslint-disable no-case-declarations */
import { io } from 'socket.io-client'
import useInitSocketEffect from './useInitSocketEffect'

import { useGetAllNotificationsQuery } from '../../../api/services/notifications.ts'
import { selectedEndpoints } from '../../../api/endpoints/endpoints'

export default (userId) => {
  const URL = selectedEndpoints.NOTIFICATIONS_SERVICE_WS
  const socket = io(URL, { autoConnect: false })
  useGetAllNotificationsQuery(userId, {
    skip: !userId,
  })
  useInitSocketEffect(socket, userId)
}
