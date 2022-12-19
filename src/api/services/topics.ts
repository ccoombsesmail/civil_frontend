import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { closeModal } from '../../redux/actions/ui/index.js'
import { Console } from 'console';
import { Recipe } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import { enumsApi } from './enums';
import { emptySplitApi } from './base';

export enum TopicCategories {
  Technology,
  Medicine,
  Politics,
  General,
}

export interface Topic {
  id: string,
  title: string;
  summary: string;
  description: string;
  tweetUrl?: string;
  ytUrl?: string;
  externalContentUrl?: string;
  evidenceLinks?: ReadonlyArray<string>;
  category: TopicCategories;
  imageUrl?: string;
  vodUrl?: string;
  thumbImgUrl?: string;
}

export interface TopicLiked {
  id: string,
  likes: number,
  likeState: number,
  updateLikeValue: number
} 

export const topicsApi = emptySplitApi.injectEndpoints({
  // reducerPath: 'topics',
  // tagTypes: ['Topics'],
  // baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    getAllTopics: builder.query<any, any>({
      query: () => ({ url: `/topics`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ id }) => ({ type: 'Topic', id } as const)),
            { type: 'Topic', id: 'LIST' },
          ]
        : 
          [{ type: 'Topic', id: 'LIST' }],
    }),
    getTopic: builder.query<any, any>({
      query: (topicId) => ({ url: `/topics/${topicId}`, method: 'GET' }),
      // providesTags: (result) => [{ type: 'Topics', id: 'LIST' }],

    }),
    createTopic: builder.mutation<Topic, Partial<Topic>>({
      query: (body) => {
        return ({ 
        url: `/topics`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'Topic', id: 'LIST' }],
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
    }),
    updateTopicLikes: builder.mutation<any, any>({
      query: (body) => {
        return ({ 
        url: `/topic-likes`, 
        method: 'PUT',
        data: body
      })
    },
    async onQueryStarted({ id, updateLikeValue, updateGetTopicQuery, ...patch }, { dispatch, queryFulfilled }) {
      let patchResult
      console.log("updateLikeValue", updateLikeValue)
      if (updateGetTopicQuery) {
        patchResult = dispatch(
          topicsApi.util.updateQueryData('getTopic', id, (draft) => {
            if (id) {
              console.log(patch)
              draft.likeState = patch.value
              draft.likes += updateLikeValue
            }
          })
        )
      } else {
        patchResult = dispatch(
          topicsApi.util.updateQueryData('getAllTopics', null, (draft) => {
            const index = draft.findIndex(t => t.id === id)
            if (index !== -1) {
              console.log(patch)
              draft[index].likeState = patch.value
              draft[index].likes += updateLikeValue
            }
          })
        )
      }

      try {
         await queryFulfilled
      } catch {
        patchResult.undo()

      }
     
    },
    }),
  })
})

export const { useGetAllTopicsQuery, useCreateTopicMutation, useGetTopicQuery, useUpdateTopicLikesMutation } = topicsApi