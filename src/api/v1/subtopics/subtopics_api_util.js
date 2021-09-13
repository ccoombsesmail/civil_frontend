import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createSubTopic = (subTopicData) => axios.post(`${BACKEND_DEV}/subtopics`, subTopicData)

export const getAllSubTopics = (topicId) => axios.get(`${BACKEND_DEV}/subtopics?topicId=${topicId}`)


export const getSubTopic = (subTopicId) => axios.get(`${BACKEND_DEV}/subtopics/${subTopicId}`)
