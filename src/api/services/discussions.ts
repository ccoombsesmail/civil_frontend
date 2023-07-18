import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { closeModal } from '../../redux/actions/ui/index.js'
import { Console } from 'console';
import { Recipe } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import { enumsApi } from './enums';
import { emptySplitApi } from './base';
import { current } from '@reduxjs/toolkit';

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
    getAllDiscussions: builder.query<any, any>({
      query: ({ spaceId, currentPage }) => ({ url: `/discussions/space-discussions?spaceId=${spaceId}&skip=${currentPage*10}`, method: 'GET' }),
      providesTags: (result, error, arg) => {
        return [{type: "DiscussionPage", id: arg.toString()}]
      }
    }),
    getPopularDiscussions: builder.query<any, any>({
      query: ({ currentPage }) => ({ url: `/discussions/popular-discussions?skip=${currentPage*10}`, method: 'GET' }),
      // providesTags: (result, error, arg) => {
      //   return [{type: "DiscussionPage", id: arg.toString()}]
      // }
    }),
    getSimilarDiscussions: builder.query<any, any>({
      query: (discussionId) => ({ url: `/discussions/similar-discussions/${discussionId}`, method: "GET" }),
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
      query: (discussionId) => ({ url: `/discussions/get-one/${discussionId}`, method: 'GET' }),
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
      async onQueryStarted(
        { id, spaceId, updateLikeValue, updateGetDiscussionQuery, currentPage, newLikeState, isPopularDiscussion, ...patch },
        { dispatch, queryFulfilled }
      ) {
        let patchResult;
        if (updateGetDiscussionQuery) {
          patchResult = dispatch(
            discussionsApi.util.updateQueryData("getDiscussion", id, (draft) => {
              if (id) {
                draft.likeState = newLikeState;
                draft.likes += updateLikeValue;
              }
            })
          ); 
        } else if (isPopularDiscussion) {
          patchResult = dispatch(
            discussionsApi.util.updateQueryData("getPopularDiscussions", { currentPage }, (draft) => {
              const index = draft.findIndex((t) => t.id === id)
              if (index !== -1) {
                draft[index].likeState = newLikeState;
                draft[index].likes += updateLikeValue;
              }
            })
          )

        }

        else {
          patchResult = dispatch(
            discussionsApi.util.updateQueryData("getAllDiscussions", {spaceId, currentPage}, (draft) => {
              const index = draft.findIndex((t) => t.id === id)
              if (index !== -1) {
                draft[index].likeState = newLikeState;
                draft[index].likes += updateLikeValue;
              }
            })
          )
        } 
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    })
  })
})

export const { 
  useGetAllDiscussionsQuery, 
  useGetDiscussionQuery,
  useCreateDiscussionMutation, 
  useGetGeneralDiscussionIdQuery,
  useGetUserDiscussionsQuery,
  useLazyGetUserDiscussionsQuery,
  useUpdateDiscussionLikesMutation,
  useGetSimilarDiscussionsQuery,
  useGetPopularDiscussionsQuery
  } = discussionsApi