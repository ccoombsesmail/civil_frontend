import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { emptySplitApi } from './base'
import { spacesApi } from './spaces'
import { onAddSpaceFollowQueryStarted, onRemoveSpaceFollowQueryStarted } from '../util/space_follows/onUpdateSpaceFollowQueryStarted'
export const spaceFollowsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    addNewSpaceFollow: builder.mutation<any, any>({
      query: (body) => {
        return ({ 
        url: `/space-follows`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: (res, err, arg) => [{ type: 'SpaceFollow', id: res.userId } as const],
      async onQueryStarted(args, helpers) {
        await onAddSpaceFollowQueryStarted(args, helpers) 
        
      }
    }),
    removeSpaceFollow: builder.mutation<any, any>({
      query: ({ id: followedSpaceId }) => {
        return ({ 
        url: `/space-follows?followedSpaceId=${followedSpaceId}`, 
        method: 'DELETE',
      }
      )},
      invalidatesTags:  (res, err, arg) => [{ type: 'SpaceFollow', id: res.userId } as const],
      async onQueryStarted(args, helpers) { 
        await onRemoveSpaceFollowQueryStarted(args, helpers)
      }
    }),
  })
})

export const { useAddNewSpaceFollowMutation, useRemoveSpaceFollowMutation} = spaceFollowsApi