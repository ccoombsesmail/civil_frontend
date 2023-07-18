import React from 'react'

type UUID = string;

export interface DiscussionItemContextValue {
  currentPage: number;
  spaceId: UUID,
  isPopularDiscussion: boolean
}

export const DiscussionItemContex = React.createContext(null)