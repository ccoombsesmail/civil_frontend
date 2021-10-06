// action creator is just a function that dispatches an action
import { closeModal } from '../ui/index'
import { ADD_TOPIC, GET_ALL_TOPICS, UPDATE_TOPIC_LIKES } from '../../reducers/topicsReducer'
import * as TopicsApiUtil from '../../../api/v1/topics/topics_api_util'

const getAllTopicsActionCreator = (topics) => ({
  type: GET_ALL_TOPICS,
  payload: topics,

})

const addTopicActionCreator = (topicData) => ({
  type: ADD_TOPIC,
  payload: topicData,
})


const updateTopicLikesActionCreator = (data) => ({
  type: UPDATE_TOPIC_LIKES,
  payload: data,
})

export const createTopic = (topicData) => (dispatch) => TopicsApiUtil.createTopic(topicData)
  .then((res) => dispatch(addTopicActionCreator(res.data)))
  .then(() => dispatch(closeModal()))

export const getAllTopics = () => (dispatch) => TopicsApiUtil.getAllTopics()
  .then((res) => dispatch(getAllTopicsActionCreator(res.data)))
  .then(() => dispatch(closeModal()))

export const getTopic = (topicId, userId) => (dispatch) => TopicsApiUtil.getTopic(topicId, userId)
  .then((res) => dispatch(addTopicActionCreator(res.data)))

  export const updateTopicLikes = (data) => (dispatch) => TopicsApiUtil.updateTopicLikes(data)
  .then((res) => dispatch(updateTopicLikesActionCreator(res.data)))

export default {
  createTopic,
  getAllTopics,
  getTopic,
  updateTopicLikes,
}
