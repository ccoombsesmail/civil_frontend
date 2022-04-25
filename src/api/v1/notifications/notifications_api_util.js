import axios from 'axios'
import { NOTIFICATIONS_SERVICE } from '../../endpoints/endpoints'

export const getAllUserNotifications = (userId) => axios.get(`${NOTIFICATIONS_SERVICE}/notifications?userId=${userId}`)

export const updateNotificationToRead = (notificationType, id) => axios.put(`${NOTIFICATIONS_SERVICE}/notifications?notificationType=${notificationType}`, { id })

export const deleteNotification = (notificationType, id) => axios.delete(`${NOTIFICATIONS_SERVICE}/notifications?notificationType=${notificationType}&id=${id}`)
