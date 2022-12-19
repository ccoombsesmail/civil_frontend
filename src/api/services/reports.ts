import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { closeModal } from '../../redux/actions/ui/index.js'
import { emptySplitApi } from './base'


export interface Report {
 
}

export const reportsApi = emptySplitApi.injectEndpoints({
  // reducerPath: 'reports',
  // tagTypes: ['Reports'],
  // baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    getReport: builder.query<Report, string>({
      query: (contentId) => ({ url: `/reports?contentId=${contentId}`, method: 'GET' }),
    }),
    createReport: builder.mutation<Report, Partial<Report>>({
      query: (body) => {
        return ({ 
        url: `/reports`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'Report', id: 'LIST' }],
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        }
      ) {
        dispatch(closeModal())
      },
    })
  }),
})

export const { useCreateReportMutation, useGetReportQuery } = reportsApi