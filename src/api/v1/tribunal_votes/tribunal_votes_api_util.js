import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const createTribunalVote = (tribunalVote) => axios.post(`${BACKEND_DEV}/tribunal-votes`, tribunalVote)
