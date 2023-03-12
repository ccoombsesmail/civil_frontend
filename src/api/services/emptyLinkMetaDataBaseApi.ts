import { createApi } from '@reduxjs/toolkit/query/react'
import { linkMetaDataBaseQuery } from '../util/axiosInstance'

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptyWebScraperServiceSplitApi = createApi({
  reducerPath: "webScraperApi",
  tagTypes: [],
  baseQuery: linkMetaDataBaseQuery,
  endpoints: () => ({}),
})