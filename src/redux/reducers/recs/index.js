/* eslint-disable import/prefer-default-export */

export const addAllOpposingRecs = (action, state) => {
  const newState = { ...state }
  newState.opposingRecs = action.payload
  return newState
}

export const addAllRecs = (action, state) => {
  const newState = { ...state }
  newState.recs = action.payload
  return newState
}
