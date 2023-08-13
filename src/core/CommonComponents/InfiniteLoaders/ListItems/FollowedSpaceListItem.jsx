/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react'
import { useGetAllFollowedSpacesQuery } from '../../../../api/services/spaces.ts'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { SpaceItem } from '../ContentItems/SpaceItem/SpaceItem'
import { SpaceItemContext } from '../ContentItems/SpaceItem/SpaceItemContext.tsx'

function FollowedSpaceListItem({ index, style }) {
  const currentPage = Math.floor(index / 5)
  const { data, isLoading, isUninitialized } = useGetAllFollowedSpacesQuery(currentPage)
  const { currentUser } = useGetCurrentUser()

  let content
  if (isLoading || isUninitialized || !data) {
    content = <CircleLoading size={60} />
  } else {
    const space = data[index]
    content = space ? (
      <SpaceItemContext.Provider value={{currentPage, updateFollowedSpacesQuery: true}}>
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

export default FollowedSpaceListItem
