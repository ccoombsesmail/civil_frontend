export const CREATE_SUB_TOPIC = 'CREATE_SUB_TOPIC'
export const GET_ALL_SUB_TOPICS = 'GET_ALL_SUB_TOPICS'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SUB_TOPIC:
      return { ...state, list: [...state.list, action.payload] }
    case GET_ALL_SUB_TOPICS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}

export default reducer
