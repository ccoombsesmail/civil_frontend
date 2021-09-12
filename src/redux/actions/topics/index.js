// action creator is just a function that dispatches an action
import { closeModal } from '../ui/index'
import { ADD_TOPIC, GET_ALL_TOPICS } from '../../reducers/topicsReducer'
import * as TopicsApiUtil from '../../../api/v1/topics/topics_api_util'

const getAllTopicsActionCreator = (topics) => ({
  type: GET_ALL_TOPICS,
  payload: topics,

})

const addTopicActionCreator = (topicData) => ({
  type: ADD_TOPIC,
  payload: topicData,
})

export const createTopic = (topicData) => (dispatch) => TopicsApiUtil.createTopic(topicData)
  .then((res) => dispatch(addTopicActionCreator(res.data)))
  .then(() => dispatch(closeModal()))

export const getAllTopics = () => (dispatch) => TopicsApiUtil.getAllTopics()
  .then((res) => dispatch(getAllTopicsActionCreator(res.data)))
  .then(() => dispatch(closeModal()))

export const getTopic = (topicId) => (dispatch) => TopicsApiUtil.getTopic(topicId)
  .then((res) => dispatch(addTopicActionCreator(res.data)))
  // .then(() => dispatch(closeModal()))

export default {
  createTopic,
  getAllTopics,
  getTopic,
}
