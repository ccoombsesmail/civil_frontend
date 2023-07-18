import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { emptySplitApi } from './base'

export const followsApi = emptySplitApi.injectEndpoints({
  // reducerPath: 'follows',
  // tagTypes: ['Follows', 'User'],
  // baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    getAllFollowers: builder.query<any, any>({
      query: (userId) => ({ url: `/follows/followers/${userId}`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ userId }) => ({ type: 'Follow', id: userId } as const)),
          ]
        : 
          [{ type: 'Follow', id: 'LIST' }],
    }),
    getAllFollowed: builder.query<any, any>({
      query: (userId) => ({ url: `/follows/followed/${userId}`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ userId }) => ({ type: 'Follow', id: userId } as const)),
          ]
        : 
          [{ type: 'Follow', id: 'LIST' }],
    }),
    addNewFollow: builder.mutation<any, any>({
      query: (body) => {
        return ({ 
        url: `/follows`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: (res, err, arg) => ['User', { type: 'Follow', id: res.userId } as const]
    }),
    removeFollow: builder.mutation<any, any>({
      query: (followedUserId) => {
        return ({ 
        url: `/follows?followedUserId=${followedUserId}`, 
        method: 'DELETE',
      }
      )},
      invalidatesTags:  (res, err, arg) => ['User', { type: 'Follow', id: res.userId } as const],
    }),
  })
})

export const { useGetAllFollowedQuery, useLazyGetAllFollowersQuery, useGetAllFollowersQuery, useAddNewFollowMutation, useRemoveFollowMutation} = followsApi