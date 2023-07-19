import React from 'react'


export interface SpaceItemContextValue {
  currentPage: number;
  updateFollowedSpacesQuery?: boolean,
  updateFocusedSpaceQuery?: boolean
}

export const SpaceItemContext = React.createContext(null)