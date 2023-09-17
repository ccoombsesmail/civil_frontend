import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { closeModal } from '../../redux/actions/ui/index.js'
import { Console } from 'console';
import { Recipe } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import { enumsApi } from './enums';
import { emptySplitApi } from './base';
import { current } from '@reduxjs/toolkit';
import { onUpdateDiscussionLikesQueryStarted } from '../util/discussions/onUpdateDiscussionLikesQueryStarted';

export enum SpaceCategories {
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
  category: SpaceCategories;
  imageUrl?: string;
  vodUrl?: string;
  thumbImgUrl?: string;
}

export const discussionsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSpaceDiscussions: builder.query<any, any>({
      query: ({ spaceId, currentPage }) => ({ url: `/discussions/space-discussions?spaceId=${spaceId}&skip=${currentPage*10}`, method: 'GET' }),
      providesTags: (result, error, arg) => {
        return [{type: "DiscussionPage", id: arg.toString()}]
      }
    }),
    getAllFollowedDiscussions: builder.query<any, any>({
      query: (currentPage) => ({ url: `/discussions-followed?skip=${currentPage*5}`, method: 'GET' }),
      // keepUnusedDataFor: 5,
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ userId }) => ({ type: 'Discussion', id: userId } as const)),
          ]
        : 
          [{ type: 'Discussion', id: 'LIST' }],
    }),
    getPopularDiscussions: builder.query<any, any>({
      query: (currentPage) => ({ url: `/discussions/popular-discussions?skip=${currentPage*5}`, method: 'GET' }),
      // providesTags: (result, error, arg) => {
      //   return [{type: "DiscussionPage", id: arg.toString()}]
      // }
    }),
    getSimilarDiscussions: builder.query<any, any>({
      query: (discussionId) => ({ url: `/discussions/similar-discussions/${discussionId}`, method: "GET" }),
    }),
    getUserDiscussions: builder.query<any, any>({
      query: ({userId, currentPage}) => ({ url: `/discussions/user/${userId}?skip=${currentPage*5}`, method: "GET" }),
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
      // providesTags: (result) => [{ type: 'Spaces', id: 'LIST' }],
    }),
    getGeneralDiscussionId: builder.query<any, any>({
      query: (spaceId) => ({ url: `/discussions/general/${spaceId}`, method: 'GET' }),
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
        }
      ) {
        dispatch(closeModal())
      },
    }),
    updateDiscussionLikes: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/discussion-likes`,
          method: "PUT",
          data: body,
        };
      },
      async onQueryStarted(args, helpers) {
        await onUpdateDiscussionLikesQueryStarted(args, helpers)
      },
    })
  })
})

export const { 
  useGetAllSpaceDiscussionsQuery, 
  useGetDiscussionQuery,
  useLazyGetDiscussionQuery,
  useCreateDiscussionMutation, 
  useGetGeneralDiscussionIdQuery,
  useGetUserDiscussionsQuery,
  useLazyGetUserDiscussionsQuery,
  useUpdateDiscussionLikesMutation,
  useGetSimilarDiscussionsQuery,
  useGetPopularDiscussionsQuery,
  useGetAllFollowedDiscussionsQuery
  } = discussionsApi