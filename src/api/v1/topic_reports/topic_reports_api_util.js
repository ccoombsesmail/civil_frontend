import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createTopicReport = (topicReport) => axios.post(`${BACKEND_DEV}/topic-reports`, topicReport)
