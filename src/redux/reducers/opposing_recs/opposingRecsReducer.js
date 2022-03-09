import { addAllOpposingRecs } from './index'

export const GET_ALL_OPPOSING_RECS = 'GET_ALL_OPPOSING_RECS'

const reducerActionMap = new Map([
  [GET_ALL_OPPOSING_RECS, addAllOpposingRecs],
])

const reducer = (state = {}, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
