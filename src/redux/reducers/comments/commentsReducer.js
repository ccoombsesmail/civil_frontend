/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import {
  addComment, updateLikesOrCivility, getAllComments, addReportedComment, getAllCommentReplies,
} from './index'

export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_REPORTED_COMMENT = 'ADD_REPORTED_COMMENT'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const GET_ALL_COMMENT_REPLIES = 'GET_ALL_COMMENT_REPLIES'

export const UPDATE_COMMENT_LIKES = 'UPDATE_COMMENT_LIKES'
export const UPDATE_COMMENT_CIVILITY = 'UPDATE_COMMENT_CIVILITY'

const reducerActionMap = new Map([
  [ADD_COMMENT, addComment],
  [ADD_REPORTED_COMMENT, addReportedComment],
  [GET_ALL_COMMENTS, getAllComments],
  [GET_ALL_COMMENT_REPLIES, getAllCommentReplies],
  [UPDATE_COMMENT_LIKES, updateLikesOrCivility],
  [UPDATE_COMMENT_CIVILITY, updateLikesOrCivility],

])

const reducer = (state = { list: [] }, action) => {
  if (!reducerActionMap.has(action.type)) return state
  return reducerActionMap.get(action.type)(action, state)
}

export default reducer
