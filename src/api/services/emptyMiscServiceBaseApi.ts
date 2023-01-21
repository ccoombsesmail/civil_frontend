import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { miscApiBaseQuery } from '../util/axiosInstance'

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptyMiscServiceSplitApi = createApi({
  reducerPath: "miscApi",
  tagTypes: [],
  baseQuery: miscApiBaseQuery,
  endpoints: () => ({}),
})