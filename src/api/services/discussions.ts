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

export interface Discussion {
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

export const discussionsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDiscussions: builder.query<any, any>({
      query: ({ topicId, currentPage }) => ({ url: `/discussions?topicId=${topicId}&skip=${currentPage*10}`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ id }) => ({ type: 'Discussion', id } as const)),
            { type: 'Discussion', id: 'LIST' },
          ]
        : 
          [{ type: 'Discussion', id: 'LIST' }],
    }),
    getUserDiscussions: builder.query<any, any>({
      query: (userId) => ({ url: `/discussions/user/${userId}`, method: "GET" }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Discussion", id } as const)),
              { type: "Discussion", id: "LIST" },
            ]
          : [{ type: "Discussion", id: "LIST" }],
    }),
    getDiscussion: builder.query<any, any>({
      query: (discussionId) => ({ url: `/discussions/${discussionId}`, method: 'GET' }),
      // providesTags: (result) => [{ type: 'Topics', id: 'LIST' }],
    }),
    getGeneralDiscussionId: builder.query<any, any>({
      query: (topicId) => ({ url: `/discussions/general/${topicId}`, method: 'GET' }),
    }),
    createDiscussion: builder.mutation<Discussion, Partial<Discussion>>({
      query: (body) => {
        return ({ 
        url: `/discussions`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'Discussion', id: 'LIST' }],
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
  })
})

export const { 
  useGetAllDiscussionsQuery, 
  useGetDiscussionQuery,
  useCreateDiscussionMutation, 
  useGetGeneralDiscussionIdQuery,
  useGetUserDiscussionsQuery,
  useLazyGetUserDiscussionsQuery 
  } = discussionsApi