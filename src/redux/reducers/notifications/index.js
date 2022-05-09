/* eslint-disable import/prefer-default-export */

export const addNewNotification = (action, state) => {
  const newState = { ...state }
  const newList = newState.list.filter((n) => n.id !== action.payload.data.id)

  newList.unshift(action.payload.data)
  newState.list = [...newList]
  return newState
}

export const deleteNotification = (action, state) => {
  const newState = { ...state }
  const newList = newState.list.filter((n) => n.id !== action.payload.id)
  newState.list = newList
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
  list: action.payload,
})
