import axios from 'axios'
import { BACKEND_DEV, UPLOAD_SERVICE, selectedEndpoints } from '../../endpoints/endpoints'

export const createTopic = (topicData) => axios.post(`${BACKEND_DEV}/topics`, topicData)

export const getAllTopics = () => axios.get(`${BACKEND_DEV}/topics`)

export const getTopic = (topicId, userId) => axios.get(`${BACKEND_DEV}/topics/${topicId}/${userId}`)

export const updateTopicLikes = (topicData) => axios.put(`${BACKEND_DEV}/topic-likes`, topicData)

export const uploadTopicMedia = (data, fileType, fileFormat) => axios.post(`${UPLOAD_SERVICE}/topics/upload-media?fileType=${fileType}&fileFormat=${fileFormat}`, data)

export const getLinkMetaData = (url) => axios.get(`${selectedEndpoints.UPLOAD_SERVICE}/topics/link-meta-data?url=${url}`)
