import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createDiscussion = (discussionData) => axios.post(`${BACKEND_DEV}/discussions`, discussionData)

export const getAllDiscussions = (topicId) => axios.get(`${BACKEND_DEV}/discussions?topicId=${topicId}`)

export const getDiscussion = (discussionId) => axios.get(`${BACKEND_DEV}/discussions/${discussionId}`)
