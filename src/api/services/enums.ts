import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { endpoint } from '@octokit/endpoint'

export const enumsApi = createApi({
  reducerPath: 'enums',
  baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    getAllEnums: builder.query<any, any>({
      query: () => ({ url: `/enums`, method: 'GET' })
    }),
  }),
})

export const { useGetAllEnumsQuery } = enumsApi

export const useGetEnumsQueryState = enumsApi.endpoints.getAllEnums.useQueryState