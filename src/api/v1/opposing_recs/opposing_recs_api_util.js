import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createOpposingRec = (opposingRec) => axios.post(`${BACKEND_DEV}/opposing-recommendations`, opposingRec)

export const getAllOpposingRecs = (targetContentId) => axios.get(`${BACKEND_DEV}/opposing-recommendations?targetContentId=${targetContentId}`)
