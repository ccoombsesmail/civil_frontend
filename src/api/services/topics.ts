import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { endpoint } from '@octokit/endpoint'

export const topicsApi = createApi({
  reducerPath: 'topicsApi',
  baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    getAllTopics: builder.query<any, any>({
      query: () => {
        return endpoint('GET /topics');
      },
    }),
  }),
})

export const { useGetAllTopicsQuery } = topicsApi