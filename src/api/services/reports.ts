import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { closeModal } from '../../redux/actions/ui/index.js'


export interface Report {
 
}

export const reportsApi = createApi({
  reducerPath: 'reports',
  tagTypes: ['Reports'],
  baseQuery: backendBaseQuery,
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
      invalidatesTags: [{ type: 'Reports', id: 'LIST' }],
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