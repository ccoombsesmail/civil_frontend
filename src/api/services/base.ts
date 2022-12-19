import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  tagTypes: ['Comment', 'Topic', 'User', 'Follow', 'SubTopic', 'Report', 'Session', 'TribunalComment', 'TribunalVote'],
  baseQuery: backendBaseQuery,
  endpoints: () => ({}),
})