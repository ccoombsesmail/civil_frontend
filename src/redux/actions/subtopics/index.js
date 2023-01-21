/* eslint-disable max-len */
// action creator is just a function that dispatches an action
import { toast } from 'react-toastify'
import { closeModal } from '../ui/index'
import { ADD_SUB_TOPIC, GET_ALL_SUB_TOPICS } from '../../reducers/discussions/subTopicsReducer'
import * as DiscussionsApiUtil from '../../../api/v1/discussions/discussions_api_util'
import { errorFormatter } from '../../utils/errorFormatter'

const getAllTopicsActionCreator = (discussions) => ({
  type: GET_ALL_SUB_TOPICS,
  payload: discussions,

})

const addTopicActionCreator = (subTopicData) => ({
  type: ADD_SUB_TOPIC,
  payload: subTopicData,
})

export const createDiscussion = (topicData) => (dispatch) => DiscussionsApiUtil.createDiscussion(topicData)
  .then((res) => dispatch(addTopicActionCreator(res.data)))
  .then(() => dispatch(closeModal()))
  .catch((error) => toast.error(errorFormatter(error)))

export const getAllDiscussions = (topicId) => (dispatch) => DiscussionsApiUtil.getAllDiscussions(topicId)
  .then((res) => dispatch(getAllTopicsActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export const getDiscussion = (subTopicId) => (dispatch) => DiscussionsApiUtil.getDiscussion(subTopicId)
  .then((res) => dispatch(addTopicActionCreator(res.data)))
  .catch((error) => toast.error(errorFormatter(error)))

export default {
  createDiscussion,
  getAllDiscussions,
  getDiscussion,
}
