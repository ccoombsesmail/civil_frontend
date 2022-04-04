/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use(
  (config) => config
    .then((token) => {
    // Append your request headers with an authenticated token
      config.headers.Authorization = `Bearer ${token}`
      return config
    }),
)

export default instance
