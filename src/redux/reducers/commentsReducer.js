export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const UPDATE_COMMENT_LIKES = 'UPDATE_COMMENT_LIKES'

const findParentComment = (rootComment, payload, comment) => {
  console.log(comment)
  if (payload.parentId === comment.data.id) comment.children = [...comment.children, {data: payload, children: []}]
  for (const child of comment.children) {
    return findParentComment(rootComment, payload, child)
  }
}

const findComment = (payload, comment) => {
  if (payload.id === comment.data.id) comment.data = { ...comment.data, likes: payload.likes, liked: payload.isLiked }
  for (const child of comment.children) {
    return findComment(payload, child)
  }
}


const reducer = (state = { list: []}, action) => {
  switch (action.type) {
     case ADD_COMMENT:
      if (state.list.find((t) => t.id === action.payload.id) && action.payload.parentId == null) return state
      if (action.payload.parentId == null)  return { ...state, list: [...state.list, action.payload] }
      const rootComment = state.list.find((c) => c.id === action.payload.rootId)
      findParentComment(rootComment, action.payload, rootComment.replies[0])
      return JSON.parse(JSON.stringify(state))
    case GET_ALL_COMMENTS:
      return { ...state, list: action.payload }
    case UPDATE_COMMENT_LIKES:
      if (action.payload.rootId) {
        const rootComment = state.list.find((c) => c.id === action.payload.rootId)
        findComment(action.payload, rootComment.replies[0])
        return JSON.parse(JSON.stringify(state))
      }
      const newList = state.list.map((comment) => {
        if (comment.id === action.payload.id) return { ...comment, likes: action.payload.likes, liked: action.payload.isLiked }
        return comment
      })
      return { ...state, list: newList }
    default:
      return state
  }
}

export default reducer
