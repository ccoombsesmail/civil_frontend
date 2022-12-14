import { createApi, TypedUseQueryHookResult } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'

import { closeModal } from '../../redux/actions/ui/index.js'
import { addSessionDataDID } from '../../redux/actions/session/index.js'
interface UserData {

}

export const sessionApi = createApi({
  reducerPath: 'session',
  baseQuery: backendBaseQuery,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<UserData, string>({
      query: (userId) => ({ url: `/users?userId=${userId}`, method: 'GET' }),
      transformResponse: (response, meta, arg) => {
        return response
      },
    }),
    upsertDidUser: builder.mutation<UserData, Partial<UserData>>({
      query: (body) => {
        return ({ 
        url: `/users/did-user`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
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
        // dispatch(addSessionDataDID(arg))
      },
    })
  }),
})

export const { useGetCurrentUserQuery, useUpsertDidUserMutation } = sessionApi

export const useGetCurrentUserQueryState = sessionApi.endpoints.getCurrentUser.useQueryState