import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createReport = (report) => axios.post(`${BACKEND_DEV}/reports`, report)

export const getReport = (contentId) => axios.get(`${BACKEND_DEV}/reports?contentId=${contentId}`)
