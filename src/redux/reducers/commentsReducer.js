export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'

const reducer = (state = { list: []}, action) => {
  switch (action.type) {
     case ADD_COMMENT:
      if (state.list.find((t) => t.id === action.payload.id)) return state
      return { ...state, list: [...state.list, action.payload] }
    case GET_ALL_COMMENTS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}

export default reducer
