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
      getAllNotifications(user.id || user.userId)
      if (socket.disconnected) {
        socket.connect()
        socket.on('connect', () => {
          console.log(user)
          socket.emit('addUser', { userId: user.userId || user.id, socketId: socket.id })
          socket.on('notification', (event) => addNotificationActionCreator(event))
        })
      }
    }
  }, [user])
}
