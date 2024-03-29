import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  tagTypes: ['Comment', 'CommentPage', 'DiscussionFollow', 'DiscussionPage', 'SpaceFollow', 'CommentWithReplies', 'Space', 'SpacePage', 'User', 'Follow', 'Discussion', 'Report', 'Session', 'TribunalComment', 'TribunalVote', 'PollVote', 'Search'],
  baseQuery: backendBaseQuery,
  endpoints: () => ({}),
})