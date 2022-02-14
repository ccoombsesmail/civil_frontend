/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const getUser = (userId, requesterId) => axios.get(`${BACKEND_DEV}/users?userId=${userId}&requesterId=${requesterId}`)

export const updateUserBioInformation = (userId, bio, experience) => axios.patch(`${BACKEND_DEV}/users?userId=${userId}`, { bio, experience })
