/* eslint-disable import/prefer-default-export */

export const addAllOpposingRecs = (action) => {
  const newState = action.payload.reduce((acc, rec) => {
    acc[rec.id] = rec
    return acc
  }, {})
  return newState
}
