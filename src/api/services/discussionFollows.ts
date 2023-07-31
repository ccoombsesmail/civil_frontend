
import { emptySplitApi } from './base'
import { onRemoveDiscussionFollowQueryStarted, onAddDiscussionFollowQueryStarted } from '../util/discussion_follows/onUpdateDiscussionFollowQueryStarted'


export const discussionFollowsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    addNewDiscussionFollow: builder.mutation<any, any>({
      query: (body) => {
        return ({ 
        url: `/discussion-follows`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: (res, err, arg) => [{ type: 'DiscussionFollow', id: res.userId } as const],
      async onQueryStarted(args, helpers) {
        await onAddDiscussionFollowQueryStarted(args, helpers) 
        
      }
    }),
    removeDiscussionFollow: builder.mutation<any, any>({
      query: ({ id: followedDiscussionId }) => {
        return ({ 
        url: `/discussion-follows?followedSpaceId=${followedDiscussionId}`, 
        method: 'DELETE',
      }
      )},
      invalidatesTags:  (res, err, arg) => [{ type: 'DiscussionFollow', id: res.userId } as const],
      async onQueryStarted(args, helpers) { 
        await onRemoveDiscussionFollowQueryStarted(args, helpers)
      }
    }),
  })
})

export const { useAddNewDiscussionFollowMutation, useRemoveDiscussionFollowMutation} = discussionFollowsApi