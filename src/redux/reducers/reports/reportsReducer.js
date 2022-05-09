import { addReport, addTribunalReport } from './index'

export const ADD_REPORT = 'ADD_REPORT'
export const ADD_TRIBUNAL_VOTE = 'ADD_TRIBUNAL_VOTE'

const reducerActionMap = new Map([
  [ADD_REPORT, addReport],
  [ADD_TRIBUNAL_VOTE, addTribunalReport],
])

const reducer = (state = {}, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
