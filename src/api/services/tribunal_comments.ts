import { closeModal } from "../../redux/actions/ui/index.js";
import { createDraft, finishDraft } from "immer";
import { toast } from "react-toastify";
import { emptySplitApi } from "./base";
import onUpdateLikesQueryStartedTribunal from "../util/tribunal_comments/updateLikes.js";
import onUpdateCivilityQueryStartedTribunal from "../util/tribunal_comments/updateCivility.js";
import { All } from '../../enums/tribunal_comment_type' 

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
      query: ({contentId, commentType = All}) => ({
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
      async onQueryStarted(args, helpers) {
        await onUpdateLikesQueryStartedTribunal(args, helpers)
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
      async onQueryStarted(args, helpers) {
        await onUpdateCivilityQueryStartedTribunal(args, helpers)
      }
    })
  }),
});

export const {
  useCreateTribunalCommentMutation,
  useGetAllTribunalCommentsBatchQuery,
  useGetAllTribunalCommentsQuery,
  useUpdateTribunalCommentCivilityMutation,
  useUpdateTribunalCommentLikesMutation,
  useLazyGetAllTribunalCommentsQuery,
} = tribunalCommentsApi;


export const useGetAllTribunalCommentsQueryState = tribunalCommentsApi.endpoints.getAllTribunalComments.useQueryState