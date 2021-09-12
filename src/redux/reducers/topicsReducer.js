export const ADD_TOPIC = 'ADD_TOPIC'
export const GET_ALL_TOPICS = 'GET_ALL_TOPICS'

const reducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case ADD_TOPIC:
      if (state.list.find((t) => t.id === action.payload.id)) return state
      return { ...state, list: [...state.list, action.payload] }
    case GET_ALL_TOPICS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}

export default reducer
