import { useEffect } from 'react'
import notificationActionCreators from '../../../redux/actions/notifications'
import useBindDispatch from '../../hooks/redux/useBindDispatch'

export default (socket, userId) => {
  const {
    addNotificationActionCreator,
  } = useBindDispatch(notificationActionCreators)

  useEffect(() => {
    if (userId) {
      if (socket.disconnected) {
        socket.connect()
        socket.on('connect', () => {
          socket.emit('addUser', { userId, socketId: socket.id })
          socket.on('notification', (event) => addNotificationActionCreator(event))
        })
      }
    }
  }, [userId])
}
