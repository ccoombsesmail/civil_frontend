import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const getAllRecs = (targetContentId) => axios.get(`${BACKEND_DEV}/recommendations?targetContentId=${targetContentId}`)
