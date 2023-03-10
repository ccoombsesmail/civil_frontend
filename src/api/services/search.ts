import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'

export const searchApi = createApi({
  reducerPath: 'search',
  tagTypes: ['Search', 'Search-Users'],
  baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    searchAll: builder.query<any, any>({
      query: (filterText) => ({ url: `/search?filterText=${filterText}`, method: 'GET' }),
      providesTags: ['Search'],
    }),
    searchAllUsers: builder.query<any, any>({
      query: (filterText) => ({ url: `/search/users?filterText=${filterText}`, method: 'GET' }),
      providesTags: ['Search-Users'],
    }),
  }),
})

export const { useSearchAllQuery, useLazySearchAllQuery, useLazySearchAllUsersQuery } = searchApi
