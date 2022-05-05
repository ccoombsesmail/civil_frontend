/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import { addComment, updateLikesOrCivility } from '../comments/index'
import { getAllTribunalComments, getAllTribunalCommentsBatch } from './index'

export const ADD_TRIBUNAL_COMMENT = 'ADD_TRIBUNAL_COMMENT'
export const GET_ALL_TRIBUNAL_COMMENTS = 'GET_ALL_TRIBUNAL_COMMENTS'
export const UPDATE_TRIBUNAL_COMMENT_LIKES = 'UPDATE_TRIBUNAL_COMMENT_LIKES'
export const UPDATE_TRIBUNAL_COMMENT_CIVILITY = 'UPDATE_TRIBUNAL_COMMENT_CIVILITY'
export const GET_ALL_TRIBUNAL_COMMENTS_BATCH = 'GET_ALL_TRIBUNAL_COMMENTS_BATCH'

const reducerActionMap = new Map([
  [ADD_TRIBUNAL_COMMENT, addComment],
  [GET_ALL_TRIBUNAL_COMMENTS, getAllTribunalComments],
  [GET_ALL_TRIBUNAL_COMMENTS_BATCH, getAllTribunalCommentsBatch],
  [UPDATE_TRIBUNAL_COMMENT_LIKES, updateLikesOrCivility],
  [UPDATE_TRIBUNAL_COMMENT_CIVILITY, updateLikesOrCivility],

])

const reducer = (state = {
  // Reporter: [],
  // Defendant: [],
  // Jury: [],
  // General: [],
  list: [],
}, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
