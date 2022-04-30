/* eslint-disable max-len */
import { toast } from 'react-toastify'

import { closeModal } from '../ui/index'
import {
  ADD_TRIBUNAL_COMMENT, GET_ALL_TRIBUNAL_COMMENTS, UPDATE_COMMENT_LIKES, UPDATE_TRIBUNAL_COMMENT_CIVILITY, GET_ALL_TRIBUNAL_COMMENTS_BATCH,
} from '../../reducers/tribunal_comments/tribunalCommentsReducer'
import * as TribunalCommentsApiUtil from '../../../api/v1/tribunal_comments/tribunal_comments_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const getAllCommentsActionCreator = (comments, commentType) => ({
  type: GET_ALL_TRIBUNAL_COMMENTS,
  payload: { comments, commentType },
})

const getAllCommentsBatchActionCreator = (payload) => ({
  type: GET_ALL_TRIBUNAL_COMMENTS_BATCH,
  payload,
})

const addCommentActionCreator = (subTopicData) => ({
  type: ADD_TRIBUNAL_COMMENT,
  payload: subTopicData,
})

const updateCommentActionCreator = (data) => ({
  type: UPDATE_COMMENT_LIKES,
  payload: data,
})

const updateCommentCivilityActionCreator = (data) => ({
  type: UPDATE_TRIBUNAL_COMMENT_CIVILITY,
  payload: data,
})

export const createTribunalComment = (commentData) => (dispatch) => {
  TribunalCommentsApiUtil.createTribunalComment(commentData)
    .then((res) => dispatch(addCommentActionCreator(res.data)))
    .then(() => {
      toast.success('Saved Comment', { delay: 1000 })
    })
    .catch((err) => toast.error(`Problem Saving Comment \n ${err}`, { autoClose: 2500 }))
    .finally(() => dispatch(closeModal()))
}

export const getAllTribunalComments = (contentId, commentType) => (dispatch) => TribunalCommentsApiUtil.getAllTribunalComments(contentId, commentType)
  .then((res) => dispatch(getAllCommentsActionCreator(res.data, commentType)))
  .catch((error) => toast.error(errorFormatter(error)))

export const getAllTribunalCommentsBatch = (contentId) => (dispatch) => TribunalCommentsApiUtil.getAllTribunalCommentsBatch(contentId)
  .then((res) => dispatch(getAllCommentsBatchActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

// export const updateCommentLikes = (data) => (dispatch) => TribunalCommentsApiUtil.updateCommentLikes(data)
//   .then((res) => dispatch(updateCommentActionCreator(res.data)))
//   .catch((error) => toast.error(error))

export const updateTribunalCommentCivility = (data) => (dispatch) => TribunalCommentsApiUtil.updateTribunalCommentCivility(data)
  .then((res) => dispatch(updateCommentCivilityActionCreator(res.data)))
  .catch((error) => toast.error(error))

export default {
  createTribunalComment,
  getAllTribunalComments,
  getAllTribunalCommentsBatch,
  updateTribunalCommentCivility,
  // getAllComments,
  // updateCommentLikes,
  // updateCommentCivility,
}
