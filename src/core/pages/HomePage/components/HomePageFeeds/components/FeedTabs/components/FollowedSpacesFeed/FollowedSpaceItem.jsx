/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react'
import { useGetAllFollowedSpacesQuery } from '../../../../../../../../../api/services/spaces.ts'
import { CircleLoading } from '../../../../../../../../../svgs/spinners/CircleLoading'
import SpaceItem from '../../../../../Spaces/components/SpaceItem/Index'
import { SpaceItemContext } from '../../../../../Spaces/components/SpaceItem/SpaceItemContex.tsx'
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser'

function FollowedSpaceItem({ index, style }) {
  const { data, isLoading, isUninitialized } = useGetAllFollowedSpacesQuery()
  const { currentUser } = useGetCurrentUser()

  let content
  if (isLoading || isUninitialized || !data) {
    content = <CircleLoading size={60} />
  } else {
    const space = data[index]
    content = space ? (
      <SpaceItemContext.Provider value={{currentPage: Math.floor(index / 5), updateFollowedSpacesQuery: true}}>
        <SpaceItem
          style={style}
          key={space.id}
          space={space}
          user={currentUser}
          currentPage={Math.floor(index / 5)}
        />
      </SpaceItemContext.Provider>

    ) : null
  }
  return <div style={style}>{content}</div>
}

export default FollowedSpaceItem
