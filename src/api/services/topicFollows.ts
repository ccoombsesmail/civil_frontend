import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { emptySplitApi } from './base'
import { topicsApi } from './topics'
import { onAddTopicFollowQueryStarted, onRemoveTopicFollowQueryStarted } from '../util/topic_follows/onUpdateTopicFollowQueryStarted'
export const topicFollowsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllFollowers: builder.query<any, any>({
    //   query: (userId) => ({ url: `/follows/followers/${userId}`, method: 'GET' }),
    //   providesTags: (result) =>
    //   result ? 
    //       [
    //         ...result.map(({ userId }) => ({ type: 'Follow', id: userId } as const)),
    //       ]
    //     : 
    //       [{ type: 'Follow', id: 'LIST' }],
    // }),
    addNewTopicFollow: builder.mutation<any, any>({
      query: (body) => {
        return ({ 
        url: `/topic-follows`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: (res, err, arg) => [{ type: 'TopicFollow', id: res.userId } as const],
      async onQueryStarted(args, helpers) {
        await onAddTopicFollowQueryStarted(args, helpers) 
        
      }
    }),
    removeTopicFollow: builder.mutation<any, any>({
      query: ({ followedTopicId }) => {
        return ({ 
        url: `/topic-follows?followedTopicId=${followedTopicId}`, 
        method: 'DELETE',
      }
      )},
      invalidatesTags:  (res, err, arg) => [{ type: 'TopicFollow', id: res.userId } as const],
      async onQueryStarted(args, helpers) { 
        await onRemoveTopicFollowQueryStarted(args, helpers)
      }
    }),
  })
})

export const { useAddNewTopicFollowMutation, useRemoveTopicFollowMutation} = topicFollowsApi