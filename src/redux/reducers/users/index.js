/* eslint-disable import/prefer-default-export */

export const addUser = (action, state) => {
  const newState = { ...state }
  newState[action.payload.userId] = action.payload
  return newState
}
