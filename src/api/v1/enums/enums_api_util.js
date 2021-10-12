import axios from 'axios'

import { BACKEND_DEV } from '../../endpoints/endpoints'


export const getAllEnums = () => axios.get(`${BACKEND_DEV}/enums`)