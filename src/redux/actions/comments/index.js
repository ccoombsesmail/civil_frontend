/* eslint-disable max-len */
import { toast } from 'react-toastify'

import { closeModal } from '../ui/index'
import {
  ADD_COMMENT, GET_ALL_COMMENTS, UPDATE_COMMENT_LIKES, UPDATE_COMMENT_CIVILITY, ADD_REPORTED_COMMENT, GET_ALL_COMMENT_REPLIES,
} from '../../reducers/comments/commentsReducer'
import * as CommentsApiUtil from '../../../api/v1/comments/comments_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const getAllCommentsActionCreator = (subtopics) => ({
  type: GET_ALL_COMMENTS,
  payload: subtopics,
})

const getAllCommentRepliesActionCreator = (commentWithReplies) => ({
  type: GET_ALL_COMMENT_REPLIES,
  payload: commentWithReplies,
})

const addCommentActionCreator = (subTopicData) => ({
  type: ADD_COMMENT,
  payload: subTopicData,
})

const addReportedCommentActionCreator = (subTopicData) => ({
  type: ADD_REPORTED_COMMENT,
  payload: subTopicData,
})

const updateCommentActionCreator = (data) => ({
  type: UPDATE_COMMENT_LIKES,
  payload: data,
})

const updateCommentCivilityActionCreator = (data) => ({
  type: UPDATE_COMMENT_CIVILITY,
  payload: data,
})

export const createComment = (commentData) => (dispatch) => {
  CommentsApiUtil.createComment(commentData)
    .then((res) => dispatch(addCommentActionCreator(res.data)))
    .then(() => {
      toast.success('Saved Comment', { delay: 1000 })
    })
    .catch((error) => toast.error(errorFormatter(error)))
    .finally(() => dispatch(closeModal()))
}

export const getAllComments = (subTopicId, userId) => (dispatch) => CommentsApiUtil.getAllComments(subTopicId, userId)
  .then((res) => dispatch(getAllCommentsActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const getAllCommentReplies = (commentId) => (dispatch) => CommentsApiUtil.getAllCommentReplies(commentId)
  .then((res) => dispatch(getAllCommentRepliesActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const getComment = (commentId) => (dispatch) => CommentsApiUtil.getComment(commentId)
  .then((res) => dispatch(addReportedCommentActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const updateCommentLikes = (data) => (dispatch) => CommentsApiUtil.updateCommentLikes(data)
  .then((res) => dispatch(updateCommentActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const updateCommentCivility = (data) => (dispatch) => CommentsApiUtil.updateCommentCivility(data)
  .then((res) => dispatch(updateCommentCivilityActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export default {
  createComment,
  getAllComments,
  getComment,
  updateCommentLikes,
  updateCommentCivility,
  getAllCommentReplies,
}
