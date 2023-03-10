import { closeModal } from "../../redux/actions/ui/index.js";
import { emptySplitApi } from "./base";

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
      query: () => ({ url: `/topics`, method: "GET" }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Topic", id } as const)),
              { type: "Topic", id: "LIST" },
            ]
          : [{ type: "Topic", id: "LIST" }],
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
        { id, updateLikeValue, updateGetTopicQuery, ...patch },
        { dispatch, queryFulfilled }
      ) {
        let patchResult;
        if (updateGetTopicQuery) {
          patchResult = dispatch(
            topicsApi.util.updateQueryData("getTopic", id, (draft) => {
              if (id) {
                draft.likeState = patch.value;
                draft.likes += updateLikeValue;
              }
            })
          );
        } else {
          patchResult = dispatch(
            topicsApi.util.updateQueryData("getAllTopics", null, (draft) => {
              const index = draft.findIndex((t) => t.id === id);
              if (index !== -1) {
                draft[index].likeState = patch.value;
                draft[index].likes += updateLikeValue;
              }
            })
          );
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

export const {
  useGetAllTopicsQuery,
  useCreateTopicMutation,
  useGetTopicQuery,
  useUpdateTopicLikesMutation,
  useGetUserTopicsQuery,
} = topicsApi;
