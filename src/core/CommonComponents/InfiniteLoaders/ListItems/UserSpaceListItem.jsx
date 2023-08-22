/* eslint-disable react/jsx-no-constructed-context-values */
import React, { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserSpacesQueryState } from '../../../../api/services/spaces.ts'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { SpaceItem } from '../ContentItems/SpaceItem/SpaceItem'
import { SpaceItemContext } from '../ContentItems/SpaceItem/SpaceItemContext.tsx'

function UserSpaceListItem({ index, style }) {
  const currentPage = Math.floor(index / 5)
  const { userId: currentlyViewedProfileUserId } = useParams()
  const { currentUser } = useGetCurrentUser()

  const userId = currentlyViewedProfileUserId || currentUser.userId

  const { data, isLoading, isUninitialized } = useGetUserSpacesQueryState({ userId, currentPage})
  const contextValue = useMemo(() => ({
    currentPage,
    currentlyViewedProfileUserId: userId,
    updateUserSpacesQuery: true,
  }), [currentPage, userId])

  let content
  if (isLoading || isUninitialized || !data) {
    content = <CircleLoading size={60} />
  } else {
    const space = data[index % 5]
    content = space ? (
      <SpaceItemContext.Provider value={contextValue}>
        <SpaceItem
          style={style}
          key={space.id}
          space={space}
          user={currentUser}
          currentPage={currentPage}
        />
      </SpaceItemContext.Provider>

    ) : null
  }
  return <div style={style}>{content}</div>
}

export default memo(UserSpaceListItem)
