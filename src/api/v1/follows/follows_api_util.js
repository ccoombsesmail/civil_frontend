import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const addNewFollow = (userId, followedUserId) => axios.post(`${BACKEND_DEV}/follows`, { userId, followedUserId })

export const removeFollow = (userId, followedUserId) => axios.delete(`${BACKEND_DEV}/follows?userId=${userId}&followedUserId=${followedUserId}`)

export const getAllFollowers = (userId) => axios.get(`${BACKEND_DEV}/follows/followers?userId=${userId}`)

export const getAllFollowed = (userId) => axios.get(`${BACKEND_DEV}/follows/followed?userId=${userId}`)
