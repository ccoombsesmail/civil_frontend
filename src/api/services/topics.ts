import { closeModal } from "../../redux/actions/ui/index.js";
import { emptySplitApi } from "./base";
import { current } from "@reduxjs/toolkit";

export enum TopicCategories {
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

export interface Topic {
  id: string;
  title: string;
  description: string;
  externalContentData: ExternalContentData | null;
  evidenceLinks?: ReadonlyArray<string>;
  category: TopicCategories;
  imageUrl?: string;
  vodUrl?: string;
}

export interface TopicLiked {
  id: string;
  likes: number;
  likeState: number;
  updateLikeValue: number;
}

export const topicsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTopics: builder.query<any, any>({
      query: (currentPage) => ({ url: `/topics?skip=${currentPage*5}`, method: "GET" }),
      providesTags: (result, error, arg) => {
        return [{type: "TopicPage", id: arg.toString()}]
      }
    }),
    getAllFollowedTopics: builder.query<any, any>({
      query: () => ({ url: `/topics-followed`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ userId }) => ({ type: 'Topic', id: userId } as const)),
          ]
        : 
          [{ type: 'Topic', id: 'LIST' }],
    }),
    getTopic: builder.query<any, any>({
      query: (topicId) => ({ url: `/topics/${topicId}`, method: "GET" }),
      // providesTags: (result) => [{ type: 'Topics', id: 'LIST' }],
    }),
    getUserTopics: builder.query<any, any>({
      query: (userId) => ({ url: `/topics/user/${userId}`, method: "GET" }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Topic", id } as const)),
              { type: "Topic", id: "LIST" },
            ]
          : [{ type: "Topic", id: "LIST" }],
    }),
    createTopic: builder.mutation<Topic, Partial<Topic>>({
      query: (body) => {
        return {
          url: `/topics`,
          method: "POST",
          data: body,
        };
      },
      invalidatesTags: [{ type: "Topic", id: "LIST" }],
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
    updateTopicLikes: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/topic-likes`,
          method: "PUT",
          data: body,
        };
      },
      async onQueryStarted(
        { id, updateLikeValue, updateGetTopicQuery, updateFollowedTopicsQuery, currentPage, newLikeState, ...patch },
        { dispatch, queryFulfilled }
      ) {
        console.log(updateFollowedTopicsQuery)
        let patchResult;
        if (updateGetTopicQuery) {
          patchResult = dispatch(
            topicsApi.util.updateQueryData("getTopic", id, (draft) => {
              if (id) {
                draft.likeState = newLikeState;
                draft.likes += updateLikeValue;
              }
            })
          );
        } else if (updateFollowedTopicsQuery) {
          patchResult = dispatch(
            topicsApi.util.updateQueryData("getAllFollowedTopics", undefined, (draft) => {
              const index = draft.findIndex((t) => t.id === id)
              if (index !== -1) {
                draft[index].likeState = newLikeState;
                draft[index].likes += updateLikeValue;
              }
            })
          )
        } else {
          patchResult = dispatch(
            topicsApi.util.updateQueryData("getAllTopics", currentPage, (draft) => {
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

topicsApi.endpoints.getAllTopics.initiate
export const {
  useGetAllTopicsQuery,
  useCreateTopicMutation,
  useGetTopicQuery,
  useUpdateTopicLikesMutation,
  useGetUserTopicsQuery,
  useLazyGetAllFollowedTopicsQuery,
  useGetAllFollowedTopicsQuery  
} = topicsApi;
