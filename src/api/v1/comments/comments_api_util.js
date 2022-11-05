import axios from 'axios'
import useSessionType from '../../../pages/hooks/permissions/useSessionType'

import { BACKEND_DEV, UPLOAD_SERVICE } from '../../endpoints/endpoints'

export const createComment = (subTopicData) => axios.post(`${BACKEND_DEV}/comments`, subTopicData)

export const getAllComments = (subtopicId, userId) => {
  return axios.get(`${BACKEND_DEV}/comments?subtopicId=${subtopicId}&userId=${userId}`)
}

export const getAllCommentReplies = (commentId) => axios.get(`${BACKEND_DEV}/comments/replies/${commentId}`)

export const getComment = (commentId) => axios.get(`${BACKEND_DEV}/comments/${commentId}`)

export const updateCommentLikes = (commentData) => axios.put(`${BACKEND_DEV}/comments/likes`, commentData)

export const updateCommentCivility = (commentData) => axios.put(`${BACKEND_DEV}/comments/civility`, commentData)

export const checkToxicity = (commentTextData) => axios.post(`${UPLOAD_SERVICE}/comments/toxicity`, commentTextData)

// export const getSubTopic = (subTopicId) => axios.get(`${BACKEND_DEV}/subtopics/${subTopicId}`)
