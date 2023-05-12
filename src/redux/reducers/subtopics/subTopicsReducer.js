import { addSubspace, addAllSubspaces } from './index'

export const ADD_SUB_SPACE = 'ADD_SUB_SPACE'
export const GET_ALL_SUB_SPACES = 'GET_ALL_SUB_SPACES'

const reducerActionMap = new Map([
  [ADD_SUB_SPACE, addSubspace],
  [GET_ALL_SUB_SPACES, addAllSubspaces],
])

const reducer = (state = {}, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
