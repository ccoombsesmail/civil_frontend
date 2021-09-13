/* eslint-disable max-len */
// action creator is just a function that dispatches an action
import { closeModal } from '../ui/index'
import { ADD_SUB_TOPIC, GET_ALL_SUB_TOPICS } from '../../reducers/subTopicsReducer'
import * as SubTopicsApiUtil from '../../../api/v1/subtopics/subtopics_api_util'

const getAllTopicsActionCreator = (subtopics) => ({
  type: GET_ALL_SUB_TOPICS,
  payload: subtopics,

})

const addTopicActionCreator = (subTopicData) => ({
  type: ADD_SUB_TOPIC,
  payload: subTopicData,
})

export const createSubTopic = (topicData) => (dispatch) => SubTopicsApiUtil.createSubTopic(topicData)
  .then((res) => dispatch(addTopicActionCreator(res.data)))
  .then(() => dispatch(closeModal()))

export const getAllSubTopics = (topicId) => (dispatch) => SubTopicsApiUtil.getAllSubTopics(topicId)
  .then((res) => dispatch(getAllTopicsActionCreator(res.data)))
  .then(() => dispatch(closeModal()))

  export const getSubTopic = (subTopicId) => (dispatch) => SubTopicsApiUtil.getSubTopic(subTopicId)
  .then((res) => dispatch(addTopicActionCreator(res.data)))

export default {
  createSubTopic,
  getAllSubTopics,
  getSubTopic,
}
