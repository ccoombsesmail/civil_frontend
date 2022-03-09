import { addSubtopic, addAllSubtopics } from './index'

export const ADD_SUB_TOPIC = 'ADD_SUB_TOPIC'
export const GET_ALL_SUB_TOPICS = 'GET_ALL_SUB_TOPICS'

const reducerActionMap = new Map([
  [ADD_SUB_TOPIC, addSubtopic],
  [GET_ALL_SUB_TOPICS, addAllSubtopics],
])

const reducer = (state = {}, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
