/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import { addComment, updateLikesOrCivility, getAllComments } from './index'

export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const UPDATE_COMMENT_LIKES = 'UPDATE_COMMENT_LIKES'
export const UPDATE_COMMENT_CIVILITY = 'UPDATE_COMMENT_CIVILITY'

const reducerActionMap = new Map([
  [ADD_COMMENT, addComment],
  [GET_ALL_COMMENTS, getAllComments],
  [UPDATE_COMMENT_LIKES, updateLikesOrCivility],
  [UPDATE_COMMENT_CIVILITY, updateLikesOrCivility],

])

const reducer = (state = { list: [] }, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
