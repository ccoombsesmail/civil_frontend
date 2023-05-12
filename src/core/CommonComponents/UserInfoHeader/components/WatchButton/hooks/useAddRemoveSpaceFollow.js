/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react'
import {
  useAddNewSpaceFollowMutation, useRemoveSpaceFollowMutation,
} from '../../../../../../api/services/spaceFollows.ts'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser.js'
import { SpaceItemContext } from '../../../../../pages/HomePage/components/Spaces/components/SpaceItem/SpaceItemContex.jsx'

export default (space) => {
  const { currentPage, updateFollowedSpacesQuery } = React.useContext(SpaceItemContext) || {}
  const [addNewFollow, { isLoading: isAddLoading }] = useAddNewSpaceFollowMutation()
  const [removeFollow,  { isLoading: isRemovingLoading }] = useRemoveSpaceFollowMutation()
  const { currentUser } = useGetCurrentUser()

  const onFollowBtnClick = useCallback((e) => {
    e.stopPropagation()
    space.isFollowing
      ? removeFollow({followedSpaceId: space.id, currentPage, updateFollowedSpacesQuery})
      : addNewFollow({ id: space.id, currentPage, updateFollowedSpacesQuery })
  }, [currentUser, space, currentPage])

  return { onFollowBtnClick, isLoading: isAddLoading || isRemovingLoading}
}
