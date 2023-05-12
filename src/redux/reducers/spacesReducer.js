export const ADD_SPACE = 'ADD_SPACE'
export const GET_ALL_SPACES = 'GET_ALL_SPACES'
export const UPDATE_SPACE_LIKES = 'UPDATE_SPACE_LIKES'

const reducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case ADD_SPACE:
      if (state.list.find((t) => t.id === action.payload.id)) return state
      return { ...state, list: [action.payload, ...state.list] }
    case GET_ALL_SPACES:
      return { ...state, list: action.payload }
    case UPDATE_SPACE_LIKES:
      const newList = state.list.map((space) => {
        if (space.id === action.payload.id) return { ...space, likes: action.payload.likes, likeState: action.payload.likeState }
        return space
      })
      return { ...state, list: newList }
    default:
      return state
  }
}

export default reducer
