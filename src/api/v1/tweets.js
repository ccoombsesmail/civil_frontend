import axios from 'axios'
import { BACKEND_DEV } from '../endpoints/endpoints'

export const getTweet = (rawUrl) => axios.post(`/tweets`, {url: `${rawUrl}`}, {
  headers: {
      'Content-Type': 'application/json'
      }
}) 
