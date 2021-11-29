/* eslint-disable max-len */
import { toast } from 'react-toastify'

import { closeModal } from '../ui/index'
import {
  ADD_COMMENT, GET_ALL_COMMENTS, UPDATE_COMMENT_LIKES, UPDATE_COMMENT_CIVILITY,
} from '../../reducers/comments/commentsReducer'
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

const updateCommentCivilityActionCreator = (data) => ({
  type: UPDATE_COMMENT_CIVILITY,
  payload: data,
})

export const createComment = (commentData) => (dispatch) => {
  // dispatch(showLoadingSpinnerAction)
  // const t = toast.loading('Saving Comment')
  CommentsApiUtil.createComment(commentData)
    .then((res) => dispatch(addCommentActionCreator(res.data)))
    // .then(() => dispatch(closeModal()))
    // .finally(hideLoadingSpinnerAction(dispatch))
    .then(() => {
      toast.success('Saved Comment')
    })
    .catch((err) => toast.error(`Problem Saving Comment \n ${err}`, { autoClose: 2500 }))
    .finally(() => dispatch(closeModal()))
}

export const getAllComments = (subTopicId, userId) => (dispatch) => CommentsApiUtil.getAllComments(subTopicId, userId)
  .then((res) => dispatch(getAllCommentsActionCreator(res.data)))
  // .then(() => dispatch(closeModal()))

export const updateCommentLikes = (data) => (dispatch) => CommentsApiUtil.updateCommentLikes(data)
  .then((res) => dispatch(updateCommentActionCreator(res.data)))

export const updateCommentCivility = (data) => (dispatch) => CommentsApiUtil.updateCommentCivility(data)
  .then((res) => dispatch(updateCommentCivilityActionCreator(res.data)))

export default {
  createComment,
  getAllComments,
  updateCommentLikes,
  updateCommentCivility,
}
