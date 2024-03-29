import axios from 'axios'
import { BACKEND_DEV, UPLOAD_SERVICE } from '../../endpoints/endpoints'

export const signUp = (userData) => axios.post(`${BACKEND_DEV}/users`, userData)

export const signIn = (userData) => axios.post(`${BACKEND_DEV}/login`, userData)

export const signOut = () => axios.delete('/session')

export const updateUserIcon = (data) => axios.put(`${BACKEND_DEV}/users`, data)

export const uploadUserIcon = (data, userId) => axios.post(`${UPLOAD_SERVICE}/users/uploadIcon?userId=${userId}`, data)

export const getUser = (userId) => axios.get(`${BACKEND_DEV}/users?userId=${userId}`)
