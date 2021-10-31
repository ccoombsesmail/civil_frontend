import { findComment, findParentComment } from './utils'

export const addComment = (action, state) => {
  const rootComment = state.list.find((c) => c.data.id === action.payload?.rootId)
  // if (rootComment && action.payload.parentId === null) return state
  if (action.payload.parentId === null) {
    return { ...state, list: [{ data: action.payload, children: [] }, ...state.list] }
  }
  findParentComment(rootComment, action.payload, rootComment)
  return JSON.parse(JSON.stringify(state))
}

export const updateLikesOrCivility = (action, state) => {
  const rootComment = state.list.find((c) => c.data.id === action.payload?.rootId)
  if (action.payload.rootId) {
    findComment(action.payload, rootComment)
    return JSON.parse(JSON.stringify(state))
  }
  const newList = state.list.map((comment) => {
    if (comment.data.id === action.payload.commentId) {
      return { ...comment, data: { ...comment.data, ...action.payload } }
    }
    return comment
  })
  return { ...state, list: newList }
}

export const getAllComments = (action, state) => ({ ...state, list: action.payload })
