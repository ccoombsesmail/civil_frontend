import axios from 'axios'

import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createTribunalComment = (comment) => axios.post(`${BACKEND_DEV}/tribunal-comments`, comment)

export const getAllTribunalComments = (contentId, commentType) => axios.get(`${BACKEND_DEV}/tribunal-comments?contentId=${contentId}&commentType=${commentType}`)

export const getAllTribunalCommentsBatch = (contentId) => axios.get(`${BACKEND_DEV}/tribunal-comments-batch?contentId=${contentId}`)


// export const updateCommentLikes = (commentData) => axios.put(`${BACKEND_DEV}/comments`, commentData)

export const updateTribunalCommentCivility = (commentData) => axios.put(`${BACKEND_DEV}/comments/civility-tribunal`, commentData)

// export const checkToxicity = (commentTextData) => axios.post(`${UPLOAD_SERVICE}/comments/toxicity`, commentTextData)

// export const getSubTopic = (subTopicId) => axios.get(`${BACKEND_DEV}/subtopics/${subTopicId}`)
