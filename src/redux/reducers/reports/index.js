export const addReport = (action, state) => {
  const newState = { ...state }
  newState[action.payload.contentId] = action.payload
  return newState
}

export const addTribunalReport = (action, state) => {
  const newState = { ...state }
  newState[action.payload.contentId] = { ...newState[action.payload.contentId], ...action.payload }
  return newState
}
