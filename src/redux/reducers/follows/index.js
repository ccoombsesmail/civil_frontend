export const addFollow = (action, state) => {
  const newState = { ...state }
  newState[action.payload.userId] = action.payload
  return newState
}

export const addAllFollowers = (action, state) => {
  const newState = { ...state, followers: action.payload }
  return newState
}

export const addAllFollowed = (action, state) => {
  const newState = { ...state, followed: action.payload }
  return newState
}
