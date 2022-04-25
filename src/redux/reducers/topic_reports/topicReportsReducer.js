import { addTopicReport, addTopicTribunalReport } from './index'

export const ADD_TOPIC_REPORT = 'ADD_TOPIC_REPORT'
export const ADD_TOPIC_TRIBUNAL_VOTE = 'ADD_TOPIC_TRIBUNAL_VOTE'

const reducerActionMap = new Map([
  [ADD_TOPIC_REPORT, addTopicReport],
  [ADD_TOPIC_TRIBUNAL_VOTE, addTopicTribunalReport],
])

const reducer = (state = {}, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
