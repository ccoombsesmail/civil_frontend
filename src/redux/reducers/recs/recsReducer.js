import { addAllOpposingRecs, addAllRecs } from './index'

export const GET_ALL_OPPOSING_RECS = 'GET_ALL_OPPOSING_RECS'
export const GET_ALL_RECS = 'GET_ALL_RECS'

const reducerActionMap = new Map([
  [GET_ALL_OPPOSING_RECS, addAllOpposingRecs],
  [GET_ALL_RECS, addAllRecs],

])

const reducer = (state = { recs: [], opposingRecs: [] }, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
