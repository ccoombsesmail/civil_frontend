import React from 'react'

type UUID = string;

export interface DiscussionItemContextValue {
  currentPage: number;
  spaceId: UUID
}

export const DiscussionItemContex = React.createContext(null)