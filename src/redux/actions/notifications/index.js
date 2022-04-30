import { toast } from 'react-toastify'
import {
  ADD_NEW_NOTIFICATION,
  ADD_ALL_NOTIFICATIONS,
  UPDATE_NOTIFICATION,
  DELETE_NOTIFICATION,
} from '../../reducers/notifications/notificationsReducer'
import * as NotificationsApiUtil from '../../../api/v1/notifications/notifications_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const addNotificationActionCreator = (notification) => ({
  type: ADD_NEW_NOTIFICATION,
  payload: notification,
})

const updateNotificationActionCreator = (notification) => ({
  type: UPDATE_NOTIFICATION,
  payload: notification,
})

const deleteNotificationActionCreator = (notification) => ({
  type: DELETE_NOTIFICATION,
  payload: notification,
})

const addAllNotificationsActionCreator = (notification) => ({
  type: ADD_ALL_NOTIFICATIONS,
  payload: notification,
})

export const getAllNotifications = (userId) => (dispatch) => NotificationsApiUtil
  .getAllUserNotifications(userId)
  .then((res) => dispatch(addAllNotificationsActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const updateNotificationToRead = (notificationType, id) => (dispatch) => NotificationsApiUtil
  .updateNotificationToRead(notificationType, id)
  .then((res) => dispatch(updateNotificationActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const deleteNotification = (notificationType, id) => (dispatch) => NotificationsApiUtil
  .deleteNotification(notificationType, id)
  .then((res) => dispatch(deleteNotificationActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export default {
  addNotificationActionCreator,
  getAllNotifications,
  updateNotificationToRead,
  deleteNotification,
}
