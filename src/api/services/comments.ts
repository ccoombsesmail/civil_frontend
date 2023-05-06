import { createDraft, finishDraft } from "immer";
import { emptySplitApi } from "./base";
import onUpdateCivilityQueryStarted from "../util/comments/updateCivility.js";
import onUpdateLikesQueryStarted from "../util/comments/updateLikes";
import addReplyToCache from "../util/comments/addReplyToCache";

export interface Comment {
  id: string;
  title: string;
  summary: string;
  description: string;
  tweetUrl?: string;
  ytUrl?: string;
  externalContentUrl?: string;
  evidenceLinks?: ReadonlyArray<string>;
  imageUrl?: string;
  vodUrl?: string;
  thumbImgUrl?: string;
}

export const findComment = (id, root) => {
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const currNode = queue.shift();
    if (currNode.data.id === id) {
      return currNode;
    }
    for (let child of currNode.children) {
      queue.push(child);
    }
  }
};

export const commentsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllComments: builder.query<any, any>({
      query: ({ discussionId, currentPage }) => ({
        url: `/comments?discussionId=${discussionId}&skip=${currentPage * 10}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => {
        return [{ type: "CommentPage", id: arg.toString() }];
      },
    }),
    getUserComments: builder.query<any, any>({
      query: (userId) => ({ url: `/comments/user/${userId}`, method: "GET" }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Comments", id } as const)),
              { type: "Comments", id: "LIST" },
            ]
          : [{ type: "Comments", id: "LIST" }],
    }),
    getAllCommentReplies: builder.query<any, any>({
      query: (commentId) => ({
        url: `/comments/replies/${commentId}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.replies.map(
                ({ id }) => ({ type: "CommentWithReplies", id } as const)
              ),
              { type: "CommentWithReplies", id: "LIST" },
            ]
          : [{ type: "CommentWithReplies", id: "LIST" }],
    }),
    getComment: builder.query<any, any>({
      query: (commentId) => ({ url: `/comments/${commentId}`, method: "GET" }),
    }),
    createComment: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/comments`,
          method: "POST",
          data: body,
        };
      },
      invalidatesTags: (result, error, arg) => {
        return [
          { type: "CommentPage", id: arg.currentPage },
          { type: "Comment", id: arg.id },
        ];
      },
      async onCacheEntryAdded(args, helpers) {
        await addReplyToCache(args, helpers)
      },
    }),
    updateCommentLikes: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/comments/likes`,
          method: "PUT",
          data: body,
        };
      },
      async onQueryStarted(args, helpers) {
        await onUpdateLikesQueryStarted(args, helpers)
      },
    }),
    updateCommentCivility: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/comments/civility`,
          method: "PUT",
          data: body,
        };
      },
      async onQueryStarted(args, helpers) {
          await onUpdateCivilityQueryStarted(args, helpers)
      },
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useGetCommentQuery,
  useCreateCommentMutation,
  useUpdateCommentLikesMutation,
  useUpdateCommentCivilityMutation,
  useGetAllCommentRepliesQuery,
  useLazyGetUserCommentsQuery,
} = commentsApi;
