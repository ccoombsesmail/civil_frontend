import axios from 'axios'

import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createTribunalComment = (comment) => axios.post(`${BACKEND_DEV}/tribunal-comments`, comment)

export const getAllTribunalComments = (contentId, commentType) => axios.get(`${BACKEND_DEV}/tribunal-comments?contentId=${contentId}&commentType=${commentType}`)

export const getAllTribunalCommentsBatch = (contentId) => axios.get(`${BACKEND_DEV}/tribunal-comments-batch?contentId=${contentId}`)

export const updateTribunalCommentLikes = (commentData) => axios.put(`${BACKEND_DEV}/comments/likes-tribunal`, commentData)

export const updateTribunalCommentCivility = (commentData) => axios.put(`${BACKEND_DEV}/comments/civility-tribunal`, commentData)
