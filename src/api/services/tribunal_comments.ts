import { closeModal } from "../../redux/actions/ui/index.js";
import { createDraft, finishDraft } from "immer";
import { toast } from "react-toastify";
import { emptySplitApi } from "./base";

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
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    const currNode = queue.shift()
    if (currNode.data.id === id) {
      return currNode
    }
    for (let child of currNode.children) {
      queue.push(child)
    }
  }
};

export const tribunalCommentsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTribunalComments: builder.query<any, any>({
      query: (contentId, commentType) => ({
        url: `/tribunal-comments?contentId=${contentId}&commentType=${commentType}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ id }) => ({ type: "TribunalComment", id } as const)
              ),
              { type: "TribunalComment", id: "LIST" },
            ]
          : [{ type: "TribunalComment", id: "LIST" }],
    }),
    getAllTribunalCommentsBatch: builder.query<any, any>({
      query: (contentId) => ({
        url: `/tribunal-comments-batch?contentId=${contentId}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ id }) => ({ type: "TribunalComment", id } as const)
              ),
              { type: "TribunalComment", id: "LIST" },
            ]
          : [{ type: "TribunalComment", id: "LIST" }],
    }),
    createTribunalComment: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/tribunal-comments`,
          method: "POST",
          data: body,
        };
      },
      invalidatesTags: [{ type: "TribunalComment", id: "LIST" }],
      async onCacheEntryAdded(arg, { dispatch }) {
        dispatch(closeModal());
      },
    }),
    updateTribunalCommentLikes: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/comments/likes-tribunal`,
          method: "PUT",
          data: body,
        };
      },
      async onQueryStarted(
        { id, reportedContentId, rootId, updateLikeValue, ...patch },
        { dispatch, queryFulfilled }
      ) {
        let patchResult;
        patchResult = dispatch(
          tribunalCommentsApi.util.updateQueryData(
            "getAllTribunalCommentsBatch",
            reportedContentId,
            (draft) => {
              let comment;
              const newDraft = createDraft(draft);
              const rootComment = newDraft.find((c) => c.data.id === rootId);
              if (!rootId) {
                comment = newDraft.find((c) => c.data.id === id);
                comment.data.likeState = patch.value;
                comment.data.likes += updateLikeValue;
                return finishDraft(newDraft);
              }
              comment = findComment(id, rootComment);
              comment.data.likeState = patch.value;
              comment.data.likes += updateLikeValue;
              return finishDraft(newDraft);
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    updateTribunalCommentCivility: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/comments/civility-tribunal`,
          method: "PUT",
          data: body,
        };
      },
      async onQueryStarted(
        {
          id,
          rootId,
          civility,
          reportedContentId,
          updateGetTopicQuery,
          parentId,
          ...patch
        },
        { dispatch, queryFulfilled }
      ) {
        let patchResult;
        patchResult = dispatch(
          tribunalCommentsApi.util.updateQueryData(
            "getAllTribunalCommentsBatch",
            reportedContentId,
            (draft) => {
              let comment;
              const newDraft = createDraft(draft);
              if (!parentId) {
                comment = newDraft.find((c) => c.data.id === id);
                comment.data.civility = patch.value;
                return finishDraft(newDraft);
              }

              const rootComment = newDraft.find((c) => c.data.id === rootId);
              comment = findComment(id, rootComment);
              comment.data.civility = patch.value;
              return finishDraft(newDraft);
            }
          )
        );

        try {
          await queryFulfilled;
        } catch ({ error }) {
          // toast.error(`${error.status}\n ${error.data.userMsg}`)
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useCreateTribunalCommentMutation,
  useGetAllTribunalCommentsBatchQuery,
  useGetAllTribunalCommentsQuery,
  useUpdateTribunalCommentCivilityMutation,
  useUpdateTribunalCommentLikesMutation,
} = tribunalCommentsApi;
