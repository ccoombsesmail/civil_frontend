import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createTopicTribunalVote = (topicTribunalVote) => axios.post(`${BACKEND_DEV}/topic-tribunal-votes`, topicTribunalVote)
