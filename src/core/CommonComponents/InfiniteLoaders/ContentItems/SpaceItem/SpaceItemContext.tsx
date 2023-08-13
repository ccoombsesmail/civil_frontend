import React from 'react'


export interface SpaceItemContextValue {
  currentPage: number;
  updateFollowedSpacesQuery?: boolean,
  updateFocusedSpaceQuery?: boolean,
  updateUserSpacesQuery?: boolean,
  currentlyViewedProfileUserId?: string
}

export const SpaceItemContext = React.createContext(null)