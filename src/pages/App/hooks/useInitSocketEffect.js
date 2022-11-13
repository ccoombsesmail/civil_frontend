import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import notificationActionCreators from '../../../redux/actions/notifications'
import useBindDispatch from '../../hooks/redux/useBindDispatch'

export default (socket) => {
  const user = useSelector((s) => s.session.currentUser)
  const {
    addNotificationActionCreator,
    getAllNotifications,
  } = useBindDispatch(notificationActionCreators)

  useEffect(() => {
    if (user) {
      getAllNotifications(user.userId)
      if (socket.disconnected) {
        socket.connect()
        socket.on('connect', () => {
          socket.emit('addUser', { userId: user.userId, socketId: socket.id })
          socket.on('notification', (event) => addNotificationActionCreator(event))
        })
      }
    }
  }, [user?.userId])
}
