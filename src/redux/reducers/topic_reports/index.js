export const addTopicReport = (action, state) => {
  const newState = { ...state }
  newState[action.payload.topicId] = action.payload
  return newState
}

export const addTopicTribunalReport = (action, state) => {
  const newState = { ...state }
  newState[action.payload.topicId] = { ...newState[action.payload.topicId], ...action.payload }
  return newState
}
