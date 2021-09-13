export const ADD_SUB_TOPIC = 'ADD_SUB_TOPIC'
export const GET_ALL_SUB_TOPICS = 'GET_ALL_SUB_TOPICS'

const reducer = (state = { list: []}, action) => {
  switch (action.type) {
     case ADD_SUB_TOPIC:
      if (state.list.find((t) => t.id === action.payload.id)) return state
      return { ...state, list: [...state.list, action.payload] }
    case GET_ALL_SUB_TOPICS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}

export default reducer
