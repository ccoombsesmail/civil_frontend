import React from 'react'

type UUID = string;

export interface DiscussionItemContextValue {
  currentPage: number;
  spaceId: UUID,
  isPopularDiscussion: boolean,
  updateFollowedDiscussionsQuery: boolean,
  updateFocusedDiscussionQuery: boolean,
  updatePopularDiscussionsQuery?: boolean,
  updateUserDiscussionsQuery?: boolean,
  updateSpaceDiscussionsQuery?: boolean,
  currentlyViewedProfileUserId?: string
}

export const DiscussionItemContext = React.createContext(null)