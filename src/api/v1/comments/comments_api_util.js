import axios from 'axios'

import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createComment = (subTopicData) => axios.post(`${BACKEND_DEV}/comments`, subTopicData)

export const getAllComments = (subtopicId, userId) => axios.get(`${BACKEND_DEV}/comments?subtopicId=${subtopicId}&userId=${userId}`)

export const updateCommentLikes = (commentData) => axios.put(`${BACKEND_DEV}/comments`, commentData)

// export const getSubTopic = (subTopicId) => axios.get(`${BACKEND_DEV}/subtopics/${subTopicId}`)
