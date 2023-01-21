/* eslint-disable import/prefer-default-export */

export const addSubtopic = (action, state) => {
  const newState = { ...state }
  newState[action.payload.id] = action.payload
  return newState
}

export const addAllSubtopics = (action) => {
  const newState = action.payload.reduce((acc, discussion) => {
    acc[discussion.id] = discussion
    return acc
  }, {})
  return newState
}
