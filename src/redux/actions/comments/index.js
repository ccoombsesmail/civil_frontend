/* eslint-disable max-len */
// action creator is just a function that dispatches an action
import { closeModal } from '../ui/index'
import { ADD_COMMENT, GET_ALL_COMMENTS } from '../../reducers/commentsReducer'
import * as CommentsApiUtil from '../../../api/v1/comments/comments_api_util'

const getAllCommentsActionCreator = (subtopics) => ({
  type: GET_ALL_COMMENTS,
  payload: subtopics,

})

const addCommentActionCreator = (subTopicData) => ({
  type: ADD_COMMENT,
  payload: subTopicData,
})

export const createComment = (commentData) => (dispatch) => CommentsApiUtil.createComment(commentData)
  .then((res) => dispatch(addCommentActionCreator(res.data)))
  // .then(() => dispatch(closeModal()))

export const getAllComments = (subTopicId) => (dispatch) => CommentsApiUtil.getAllComments(subTopicId)
  .then((res) => dispatch(getAllCommentsActionCreator(res.data)))
  // .then(() => dispatch(closeModal()))

  // export const getSubTopic = (subTopicId) => (dispatch) => CommentsApiUtil.getSubTopic(subTopicId)
  // .then((res) => dispatch(addTopicActionCreator(res.data)))

export default {
  createComment,
  getAllComments,
}
