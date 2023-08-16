/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react'
import {
  useAddNewSpaceFollowMutation, useRemoveSpaceFollowMutation,
} from '../../../../../../api/services/spaceFollows.js'
import { Space } from '../../../../../../types/spaces/space.js'
import { AddRemoveSpaceQueryParams } from '../../../../../../api/util/space_follows/onUpdateSpaceFollowQueryStarted'
import { SpaceItemContext, SpaceItemContextValue } from '../../../../InfiniteLoaders/ContentItems/SpaceItem/SpaceItemContext.js'

export default (space: Space) => {
  // updateFollowedSpacesQuery is a flag so that RTK knows which cache to update (in this case if true, getAllFollowedSpaces query)
  // updateFocusedSpaceQuery is a flag so that RTK knows it should update the focused space (i.e the view page for a given space)
  const { currentPage, updateFollowedSpacesQuery, updateFocusedSpaceQuery, updateUserSpacesQuery, currentlyViewedProfileUserId } = React.useContext<SpaceItemContextValue>(SpaceItemContext) || {}
  const [addNewFollow, { isLoading: isAddLoading }] = useAddNewSpaceFollowMutation()
  const [removeFollow, { isLoading: isRemovingLoading }] = useRemoveSpaceFollowMutation()

  const onFollowBtnClick = useCallback((e) => {
    e.stopPropagation()
    const params: AddRemoveSpaceQueryParams = {id: space.id, currentlyViewedProfileUserId, currentPage, updateFollowedSpacesQuery, updateFocusedSpaceQuery, updateUserSpacesQuery }
    space.isFollowing
      ? removeFollow(params)
      : addNewFollow(params)
  }, [space, currentPage, updateFollowedSpacesQuery, updateFocusedSpaceQuery, updateUserSpacesQuery, currentlyViewedProfileUserId])

  return { onFollowBtnClick, isLoading: isAddLoading || isRemovingLoading}
}
