import { closeModal } from '../../redux/actions/ui/index.js'
import { createDraft, finishDraft } from 'immer';
import { toast } from 'react-toastify';
import { emptySplitApi } from './base'



export interface Comment {
  id: string,
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



export const commentsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllComments: builder.query<any, any>({
      query: (discussionId) => ({ url: `/comments?discussionId=${discussionId}`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ id }) => ({ type: 'Comment', id } as const)),
            { type: 'Comment', id: 'LIST' },
          ]
        : 
          [{ type: 'Comment', id: 'LIST' }],
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
      query: (commentId) => ({ url: `/comments/replies/${commentId}`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.replies.map(({ id }) => ({ type: 'Comment', id } as const)),
            { type: 'Comment', id: 'LIST' },
          ]
        : 
          [{ type: 'Comment', id: 'LIST' }],
    }),
    getComment: builder.query<any, any>({
      query: (commentId) => ({ url: `/comments/${commentId}`, method: 'GET' }),
      // providesTags: (result) => [{ type: 'Topics', id: 'LIST' }],

    }),
    createComment: builder.mutation<any, any>({
      query: (body) => {
        return ({ 
        url: `/comments`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'Comment', id: 'LIST' }],
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
        }
      ) {
        dispatch(closeModal())
      },
    }),
    updateCommentLikes: builder.mutation<any, any>({
      query: (body) => {
        return ({ 
        url: `/comments/likes`, 
        method: 'PUT',
        data: body
      })
    },
    async onQueryStarted({ id, rootId, commentId, parentId, discussionId, isFocusedComment, updateLikeValue, updateGetTopicQuery, isReplies, ...patch }, { dispatch, queryFulfilled }) {
      let patchResult
      if (isFocusedComment) {
        patchResult = dispatch(
          commentsApi.util.updateQueryData('getAllCommentReplies', id, (draft) => {
            if (id) {
              const newDraft = createDraft(draft)
              console.log(patch)
              newDraft.comment.likeState = patch.value
              newDraft.comment.likes += updateLikeValue
              return finishDraft(newDraft)

            }
          })
        )
      } else if (isReplies) {
        patchResult = dispatch(
          commentsApi.util.updateQueryData('getAllCommentReplies', rootId, (draft) => {
            const newDraft = createDraft(draft)
            const rootComment = newDraft.replies.find((c) => c.data.id === commentId)
            if (parentId === rootId) {
              rootComment.data.likeState = patch.value
              rootComment.data.likes += updateLikeValue
              return finishDraft(newDraft)
            }
            const comment = findComment(id, rootComment)
            comment.data.likeState = patch.value
            comment.data.likes += updateLikeValue
            return finishDraft(newDraft)
          })
        )
      } else {
        patchResult = dispatch(
          commentsApi.util.updateQueryData('getAllComments', discussionId, (draft) => {
            let comment
            const newDraft = createDraft(draft)
            const rootComment = newDraft.find((c) => c.data.id === rootId)
            if (!rootId) {
              comment = newDraft.find((c) => c.data.id === id)
              comment.data.likeState = patch.value
              comment.data.likes += updateLikeValue
              return finishDraft(newDraft)
            }
            comment = findComment(id, rootComment)
            comment.data.likeState = patch.value
            comment.data.likes += updateLikeValue
            return finishDraft(newDraft)
          })
        )
      }

      try {
         await queryFulfilled
      } catch {
        patchResult.undo()

      }
    },
    }),
    updateCommentCivility: builder.mutation<any, any>({
      query: (body) => {
        return ({ 
        url: `/comments/civility`, 
        method: 'PUT',
        data: body
      })
    },
    async onQueryStarted({ id, rootId, civility, discussionId, updateLikeValue, updateGetTopicQuery, isReplies, isFocusedComment, ...patch }, { dispatch, queryFulfilled }) {
      let patchResult
      if (isFocusedComment) {
        patchResult = dispatch(
          commentsApi.util.updateQueryData('getAllCommentReplies', id, (draft) => {
            if (id) {
              const newDraft = createDraft(draft)
              newDraft.comment.civility = patch.value
              return finishDraft(newDraft)

            }
          })
        )
      } else if (isReplies) {
        patchResult = dispatch(
          commentsApi.util.updateQueryData('getAllCommentReplies', id, (draft) => {
            if (id) {
              console.log(patch)
              draft.comment.civility = patch.value
            }
          })
        )
      } else {
        patchResult = dispatch(
          commentsApi.util.updateQueryData('getAllComments', discussionId, (draft) => {
            let comment
            const newDraft = createDraft(draft)
            const rootComment = newDraft.find((c) => c.data.id === rootId)
            if (!rootId) {
              comment = newDraft.find((c) => c.data.id === id)
              comment.data.civility = patch.value
              return finishDraft(newDraft)
            }
            comment = findComment(id, rootComment)
            comment.data.civility = patch.value
            return finishDraft(newDraft)
          })
        )
      }

      try {
         await queryFulfilled
      } catch ({ error }) {
        // toast.error(`${error.status}\n ${error.data.userMsg}`)
        patchResult.undo()

      }
    },
    }),
  })
})

export const {
  useGetAllCommentsQuery, 
  useGetCommentQuery, 
  useCreateCommentMutation,
  useUpdateCommentLikesMutation,
  useUpdateCommentCivilityMutation,
  useGetAllCommentRepliesQuery,
  useLazyGetUserCommentsQuery
  } = commentsApi