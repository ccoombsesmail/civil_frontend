/* eslint-disable max-len */
import { closeModal } from '../ui/index'
import { ADD_COMMENT, GET_ALL_COMMENTS, UPDATE_COMMENT_LIKES } from '../../reducers/commentsReducer'
import * as CommentsApiUtil from '../../../api/v1/comments/comments_api_util'

const getAllCommentsActionCreator = (subtopics) => ({
  type: GET_ALL_COMMENTS,
  payload: subtopics,

})

const addCommentActionCreator = (subTopicData) => ({
  type: ADD_COMMENT,
  payload: subTopicData,
})


const updateCommentActionCreator = (data) => ({
  type: UPDATE_COMMENT_LIKES,
  payload: data,
})

export const createComment = (commentData) => (dispatch) => CommentsApiUtil.createComment(commentData)
  .then((res) => dispatch(addCommentActionCreator(res.data)))
  // .then(() => dispatch(closeModal()))

export const getAllComments = (subTopicId, userId) => (dispatch) => CommentsApiUtil.getAllComments(subTopicId, userId)
  .then((res) => dispatch(getAllCommentsActionCreator(res.data)))
  // .then(() => dispatch(closeModal()))

export const updateCommentLikes = (data) => (dispatch) => CommentsApiUtil.updateCommentLikes(data)
  .then((res) => dispatch(updateCommentActionCreator(res.data)))


export default {
  createComment,
  getAllComments,
  updateCommentLikes,
}
