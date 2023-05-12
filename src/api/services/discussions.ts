import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { closeModal } from '../../redux/actions/ui/index.js'
import { Console } from 'console';
import { Recipe } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import { enumsApi } from './enums';
import { emptySplitApi } from './base';

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
      query: ({ spaceId, currentPage }) => ({ url: `/discussions?spaceId=${spaceId}&skip=${currentPage*10}`, method: 'GET' }),
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
    updateDiscussionLikes: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/discussion-likes`,
          method: "PUT",
          data: body,
        };
      },
      async onQueryStarted(
        { id, updateLikeValue, updateGetSpaceQuery, updateFollowedSpacesQuery, currentPage, newLikeState, ...patch },
        { dispatch, queryFulfilled }
      ) {
        let patchResult;
        if (updateGetSpaceQuery) {
          patchResult = dispatch(
            discussionsApi.util.updateQueryData("getDiscussion", id, (draft) => {
              if (id) {
                draft.likeState = newLikeState;
                draft.likes += updateLikeValue;
              }
            })
          );
        } 
        // else if (updateFollowedSpacesQuery) {
        //   patchResult = dispatch(
        //     discussionsApi.util.updateQueryData("getAllFollowedSpaces", undefined, (draft) => {
        //       const index = draft.findIndex((t) => t.id === id)
        //       if (index !== -1) {
        //         draft[index].likeState = newLikeState;
        //         draft[index].likes += updateLikeValue;
        //       }
        //     })
        //   )
        // } 
        else {
          patchResult = dispatch(
            discussionsApi.util.updateQueryData("getAllDiscussions", currentPage, (draft) => {
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
  useLazyGetUserDiscussionsQuery 
  } = discussionsApi