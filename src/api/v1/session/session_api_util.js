import axios from 'axios'
import { BACKEND_DEV, UPLOAD_SERVICE } from '../../endpoints/endpoints'

export const signUp = (userData) => axios.post(`${BACKEND_DEV}/users`, userData)

export const signIn = (userData) => axios.post(`${BACKEND_DEV}/login`, userData)

export const signOut = () => axios.delete('/session')


export const updateUserIcon = (data) => axios.put(`${BACKEND_DEV}/users`, data)


export const uploadUserIcon = (data, username) => axios.post(`${UPLOAD_SERVICE}/users/uploadIcon?username=${username}`, data)
