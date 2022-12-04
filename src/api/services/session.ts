import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { endpoint } from '@octokit/endpoint'

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    getAllTopics: builder.query<any, any>({
      query: () => {
        return endpoint('GET /session');
      },
    }),
  }),
})

export const { useGetAllTopicsQuery } = sessionApi