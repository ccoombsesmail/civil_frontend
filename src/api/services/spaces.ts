import { closeModal } from "../../redux/actions/ui/index.js";
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
      query: () => ({ url: `/spaces-followed`, method: 'GET' }),
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
      query: (userId) => ({ url: `/spaces/user/${userId}`, method: "GET" }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Space", id } as const)),
              { type: "Space", id: "LIST" },
            ]
          : [{ type: "Space", id: "LIST" }],
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
      async onQueryStarted(
        { id, updateLikeValue, updateGetSpaceQuery, updateFollowedSpacesQuery, currentPage, newLikeState, ...patch },
        { dispatch, queryFulfilled }
      ) {
        let patchResult;
        if (updateGetSpaceQuery) {
          patchResult = dispatch(
            spacesApi.util.updateQueryData("getSpace", id, (draft) => {
              if (id) {
                draft.likeState = newLikeState;
                draft.likes += updateLikeValue;
              }
            })
          );
        } else if (updateFollowedSpacesQuery) {
          patchResult = dispatch(
            spacesApi.util.updateQueryData("getAllFollowedSpaces", undefined, (draft) => {
              const index = draft.findIndex((t) => t.id === id)
              if (index !== -1) {
                draft[index].likeState = newLikeState;
                draft[index].likes += updateLikeValue;
              }
            })
          )
        } else {
          patchResult = dispatch(
            spacesApi.util.updateQueryData("getAllSpaces", currentPage, (draft) => {
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
    }),
  }),
});

spacesApi.endpoints.getAllSpaces.initiate
export const {
  useGetAllSpacesQuery,
  useCreateSpaceMutation,
  useGetSpaceQuery,
  useUpdateSpaceLikesMutation,
  useGetUserSpacesQuery,
  useLazyGetAllFollowedSpacesQuery,
  useGetAllFollowedSpacesQuery  
} = spacesApi;
