import {
  addNewNotification,
  addAllNotifications,
  updateNotification,
  deleteNotification,
} from './index'

export const ADD_NEW_NOTIFICATION = 'ADD_NEW_NOTIFICATION'
export const ADD_ALL_NOTIFICATIONS = 'ADD_ALL_NOTIFICATIONS'
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION'
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'

const reducerActionMap = new Map([
  [ADD_NEW_NOTIFICATION, addNewNotification],
  [ADD_ALL_NOTIFICATIONS, addAllNotifications],
  [UPDATE_NOTIFICATION, updateNotification],
  [DELETE_NOTIFICATION, deleteNotification],
])

const reducer = (state = { userNotificationsList: [], tribunalNotificationsList: [] }, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
