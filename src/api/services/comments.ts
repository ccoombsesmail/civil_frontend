import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
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


export const findComment = (payload, root) => {
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    const currNode = queue.shift()
    if (currNode.data.id === payload.commentId) {
      return currNode
    }
    for (let child of currNode.children) {
      queue.push(child)
    }
  }
};



export const commentsApi = emptySplitApi.injectEndpoints({
  // reducerPath: 'comments',
  // tagTypes: ['Comments'],
  // baseQuery: backendBaseQuery,
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
    async onQueryStarted({ id, rootId, discussionId, updateLikeValue, updateGetTopicQuery, ...patch }, { dispatch, queryFulfilled }) {
      let patchResult
      console.log("updateLikeValue", updateLikeValue)
      if (false) {
        patchResult = dispatch(
          commentsApi.util.updateQueryData('getComment', id, (draft) => {
            if (id) {
              console.log(patch)
              draft.likeState = patch.value
              draft.likes += updateLikeValue
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
              comment.data.likeState = patch.value
              comment.data.likes += updateLikeValue
              return finishDraft(newDraft)
            }
            comment = findComment(patch, rootComment)
            comment.data.likeState = patch.value
            comment.data.likes += updateLikeValue
            return finishDraft(newDraft)
          })
        )
      }

      patchResult = dispatch(
        commentsApi.util.updateQueryData('getAllCommentReplies', id, (draft) => {
          if (id) {
            console.log(patch)
            draft.comment.likeState = patch.value
            draft.comment.likes += updateLikeValue
          }
        })
      )

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
    async onQueryStarted({ id, rootId, civility, discussionId, updateLikeValue, updateGetTopicQuery, ...patch }, { dispatch, queryFulfilled }) {
      let patchResult
      console.log("updateLikeValue", updateLikeValue)
      if (false) {
        patchResult = dispatch(
          commentsApi.util.updateQueryData('getComment', id, (draft) => {
            if (id) {
              console.log(patch)
              draft.likeState = patch.value
              draft.likes += updateLikeValue
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
            comment = findComment(patch, rootComment)
            comment.data.civility = patch.value
            return finishDraft(newDraft)
          })
        )
      }

      patchResult = dispatch(
        commentsApi.util.updateQueryData('getAllCommentReplies', id, (draft) => {
          if (id) {
            console.log(patch)
            draft.comment.civility = patch.value
          }
        })
      )

      try {
         await queryFulfilled
      } catch ({ error }) {
        toast.error(`${error.status}\n ${error.data.userMsg}`)
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
  useGetAllCommentRepliesQuery
  } = commentsApi