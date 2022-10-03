/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

import { TribunalSelection } from '../../../enums/notification_types'

export const addNewNotification = (action, state) => {
  const newState = { ...state }
  switch (action.payload.data.eventType) {
    case TribunalSelection: {
      const newTribunalNotificationsList = newState.tribunalNotificationsList.filter((n) => n.id !== action.payload.data.id)
      newTribunalNotificationsList.unshift(action.payload.data)
      newState.tribunalNotificationsList = [...newTribunalNotificationsList]
      break
    }
    default: {
      const newNotificationsList = newState.userNotificationsList.filter((n) => n.id !== action.payload.data.id)
      newNotificationsList.unshift(action.payload.data)
      newState.userNotificationsList = [...newNotificationsList]
      break
    }
  }

  return newState
}

export const deleteNotification = (action, state) => {
  const newState = { ...state }
  const newNotificationsList = newState.userNotificationsList.filter((n) => n.id !== action.payload.id)
  const newTribunalNotificationsList = newState.tribunalNotificationsList.filter((n) => n.id !== action.payload.id)
  newState.userNotificationsList = newNotificationsList
  newState.tribunalNotificationsList = newTribunalNotificationsList

  return newState
}

export const updateNotification = (action, state) => {
  const newState = { ...state }
  const newList = newState.list.map((n) => {
    if (n.id === action.payload.id) {
      return { ...action.payload }
    }
    return action.payload
  })
  newState.list = newList
  return newState
}

export const addAllNotifications = (action) => ({
  userNotificationsList: action.payload.userNotifications,
  tribunalNotificationsList: action.payload.tribunalNotifications,
})
