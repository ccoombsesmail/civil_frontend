import { closeModal } from "../../redux/actions/ui/index.js";
import { onUpdateSpacesLikesQueryStarted } from "../util/spaces/onUpdateSpaceLikesQueryStarted.js";
import { emptySplitApi } from "./base.js";
import { current } from "@reduxjs/toolkit";

export enum SpaceCategories {
  Technology,
  Medicine,
  Politics,
  General,
}

export interface ExternalContentData {
  linkType: string;
  externalContentUrl: string;
  embedId: string | null;
  thumbImgUrl: string | null;
}

export interface Space {
  id: string;
  title: string;
  description: string;
  externalContentData: ExternalContentData | null;
  evidenceLinks?: ReadonlyArray<string>;
  category: SpaceCategories;
  imageUrl?: string;
  vodUrl?: string;
}

export interface SpaceLiked {
  id: string;
  likes: number;
  likeState: number;
  updateLikeValue: number;
}

export const spacesApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSpaces: builder.query<any, any>({
      query: (currentPage) => ({ url: `/spaces?skip=${currentPage*5}`, method: "GET" }),
      providesTags: (result, error, arg) => {
        return [{type: "SpacePage", id: arg.toString()}]
      }
    }),
    getAllFollowedSpaces: builder.query<any, any>({
      query: (currentPage) => ({ url: `/spaces-followed?skip=${currentPage*5}`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ userId }) => ({ type: 'Space', id: userId } as const)),
          ]
        : 
          [{ type: 'Space', id: 'LIST' }],
    }),
    getSpace: builder.query<any, any>({
      query: (spaceId) => ({ url: `/spaces/${spaceId}`, method: "GET" }),
      // providesTags: (result) => [{ type: 'Spaces', id: 'LIST' }],
    }),
    getUserSpaces: builder.query<any, any>({
      query: ({ userId, currentPage}) => ({ url: `/spaces/user/${userId}?skip=${currentPage*5}`, method: "GET" }),
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({ id }) => ({ type: "Space", id } as const)),
      //         { type: "Space", id: "LIST" },
      //       ]
      //     : [{ type: "Space", id: "LIST" }],
    }),
    getSimilarSpaces: builder.query<any, any>({
      query: (spaceId) => ({ url: `/spaces/similar-spaces/${spaceId}`, method: "GET" }),
    }),
    createSpace: builder.mutation<Space, Partial<Space>>({
      query: (body) => {
        return {
          url: `/spaces`,
          method: "POST",
          data: body,
        };
      },
      invalidatesTags: [{ type: "Space", id: "LIST" }],
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
        dispatch(closeModal());
      },
    }),
    updateSpaceLikes: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/space-likes`,
          method: "PUT",
          data: body,
        };
      },
      async onQueryStarted(args, helpers) {
        await onUpdateSpacesLikesQueryStarted(args, helpers)
      },
    }),
  }),
});

spacesApi.endpoints.getAllSpaces.initiate
spacesApi.endpoints.getUserSpaces.initiate

export const {
  useGetAllSpacesQuery,
  useCreateSpaceMutation,
  useGetSpaceQuery,
  useUpdateSpaceLikesMutation,
  useGetUserSpacesQuery,
  useLazyGetAllFollowedSpacesQuery,
  useGetAllFollowedSpacesQuery,
  useGetSimilarSpacesQuery  
} = spacesApi;


export const useGetUserSpacesQueryState = spacesApi.endpoints.getUserSpaces.useQueryState