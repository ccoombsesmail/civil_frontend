import React from 'react'

type UUID = string;

export interface DiscussionItemContextValue {
  currentPage: number;
  spaceId: UUID,
  isPopularDiscussion: boolean,
  updateFollowedDiscussionsQuery: boolean,
  updateFocusedDiscussionQuery: boolean
}

export const DiscussionItemContex = React.createContext(null)