export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

const reducer = (state = { list: []}, action) => {
  switch (action.type) {
     case ADD_COMMENT:
      if (state.list.find((t) => t.id === action.payload.id)) return state
      return { ...state, list: [...state.list, action.payload] }
    case GET_ALL_COMMENTS:
      return { ...state, list: action.payload }
    case UPDATE_COMMENT:
      const newList = state.list.map((comment) => {
        if (comment.id === action.payload.id) return action.payload
        return comment
      })
      return { ...state, list: newList }
    default:
      return state
  }
}

export default reducer
