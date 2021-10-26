/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import { BACKEND_DEV } from '../../endpoints/endpoints'

export const getUser = (userId) => axios.get(`${BACKEND_DEV}/users?userId=${userId}`)
