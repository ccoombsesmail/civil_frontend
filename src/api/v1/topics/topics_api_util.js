import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createTopic = (topicData) => axios.post(`${BACKEND_DEV}/topics`, topicData)

export const getAllTopics = () => axios.get(`${BACKEND_DEV}/topics`)

export const getTopic = (topicId, userId) => axios.get(`${BACKEND_DEV}/topics/${topicId}/${userId}`)

export const updateTopicLikes = (topicData) => axios.put(`${BACKEND_DEV}/topics`, topicData)
