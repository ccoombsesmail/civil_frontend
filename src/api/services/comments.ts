import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { closeModal } from '../../redux/actions/ui/index.js'
import { createDraft, finishDraft } from 'immer';



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


export const findComment = (payload, comment) => {
  const { children } = comment
  if (payload.commentId === comment.data.id) {
    return comment
  }
  for (let i = 0; i < children.length; i += 1) {
    return findComment(payload, children[i])
  }
}


export const commentsApi = createApi({
  reducerPath: 'comments',
  tagTypes: ['Comments'],
  baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    getAllComments: builder.query<any, any>({
      query: (subtopicId) => ({ url: `/comments?subtopicId=${subtopicId}`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ id }) => ({ type: 'Comments', id } as const)),
            { type: 'Comments', id: 'LIST' },
          ]
        : 
          [{ type: 'Comments', id: 'LIST' }],
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
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
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
    async onQueryStarted({ id, rootId, subtopicId, updateLikeValue, updateGetTopicQuery, ...patch }, { dispatch, queryFulfilled }) {
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
          commentsApi.util.updateQueryData('getAllComments', subtopicId, (draft) => {
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
    async onQueryStarted({ id, rootId, civility, subtopicId, updateLikeValue, updateGetTopicQuery, ...patch }, { dispatch, queryFulfilled }) {
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
          commentsApi.util.updateQueryData('getAllComments', subtopicId, (draft) => {
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

      try {
         await queryFulfilled
      } catch {
        patchResult.undo()

      }
    },
    }),
  })
})

export const {useGetAllCommentsQuery, useGetCommentQuery, useCreateCommentMutation, useUpdateCommentLikesMutation, useUpdateCommentCivilityMutation } = commentsApi