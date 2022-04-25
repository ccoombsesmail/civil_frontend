import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createTopicReport = (topicReport) => axios.post(`${BACKEND_DEV}/topic-reports`, topicReport)

export const getTopicReport = (topicId) => axios.get(`${BACKEND_DEV}/topic-reports?topicId=${topicId}`)
