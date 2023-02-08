import axios from 'axios'
import useSessionType from '../../../core/hooks/permissions/useSessionType'

import { BACKEND_DEV, UPLOAD_SERVICE, selectedEndpoints } from '../../endpoints/endpoints'

export const createComment = (discussionData) => axios.post(`${BACKEND_DEV}/comments`, discussionData)

export const getAllComments = (discussionId, userId) => {
  return axios.get(`${BACKEND_DEV}/comments?discussionId=${discussionId}`)
}

export const getAllCommentReplies = (commentId) => axios.get(`${BACKEND_DEV}/comments/replies/${commentId}`)

export const getComment = (commentId) => axios.get(`${BACKEND_DEV}/comments/${commentId}`)

export const updateCommentLikes = (commentData) => axios.put(`${BACKEND_DEV}/comments/likes`, commentData)

export const updateCommentCivility = (commentData) => axios.put(`${BACKEND_DEV}/comments/civility`, commentData)

export const checkToxicity = (commentTextData) => axios.post(`${selectedEndpoints.UPLOAD_SERVICE}/comments/toxicity`, commentTextData)

// export const getdiscussion = (discussionId) => axios.get(`${BACKEND_DEV}/discussions/${discussionId}`)
