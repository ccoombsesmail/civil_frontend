import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const addNewFollow = (userId, followerId) => axios.post(`${BACKEND_DEV}/follows`, { userId, followerId })

export const removeFollow = (userId, followerId) => axios.delete(`${BACKEND_DEV}/follows?userId=${userId}&followerId=${followerId}`)

export const getAllFollowers = (userId) => axios.get(`${BACKEND_DEV}/follows/followers?userId=${userId}`)

export const getAllFollowed = (userId) => axios.get(`${BACKEND_DEV}/follows/followed?userId=${userId}`)
