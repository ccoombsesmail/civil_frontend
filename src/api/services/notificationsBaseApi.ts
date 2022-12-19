import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { notificationsBaseQuery } from '../util/axiosInstance'

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptyNotificationsSplitApi = createApi({
  reducerPath: "notificationsApi",
  tagTypes: [],
  baseQuery: notificationsBaseQuery,
  endpoints: () => ({}),
})