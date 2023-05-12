import axios from 'axios'
import { BACKEND_DEV, UPLOAD_SERVICE, selectedEndpoints } from '../../endpoints/endpoints'

export const createSpace = (spaceData) => axios.post(`${BACKEND_DEV}/spaces`, spaceData)

export const getAllSpaces = () => axios.get(`${BACKEND_DEV}/spaces`)

export const getSpace = (spaceId, userId) => axios.get(`${BACKEND_DEV}/spaces/${spaceId}/${userId}`)

export const updateSpaceLikes = (spaceData) => axios.put(`${BACKEND_DEV}/space-likes`, spaceData)

export const uploadSpaceMedia = (data, fileType, fileFormat) => axios.post(`${UPLOAD_SERVICE}/spaces/upload-media?fileType=${fileType}&fileFormat=${fileFormat}`, data)

export const getLinkMetaData = (url) => axios.get(`${selectedEndpoints.UPLOAD_SERVICE}/spaces/link-meta-data?url=${url}`)
