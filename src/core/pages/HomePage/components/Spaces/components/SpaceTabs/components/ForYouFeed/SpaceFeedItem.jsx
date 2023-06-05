/* eslint-disable react/jsx-no-constructed-context-values */
import React, { memo } from 'react'
import { useGetAllSpacesQuery } from '../../../../../../../../../api/services/spaces.ts'
import SpaceItem from '../../../SpaceItem/Index'
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser'
import { SpaceItemContext } from '../../../SpaceItem/SpaceItemContex.tsx'
import CardLoader from '../../../../../../../../CommonComponents/CardLoader/CardLoader'

function SpaceFeedItem({ index, style }) {
  const { data, isLoading, isUninitialized } = useGetAllSpacesQuery(Math.floor(index / 5))
  const { currentUser } = useGetCurrentUser()
  let content
  if (isLoading || isUninitialized || !data) {
    content = <CardLoader />
  } else {
    const space = data[index % 5]
    content = space ? (
      <SpaceItemContext.Provider value={{currentPage: Math.floor(index / 5)}}>
        <SpaceItem
          style={style}
          key={space.id}
          space={space}
          user={currentUser}
          currentPage={Math.floor(index / 5)}
          hideCommentButton
        />
      </SpaceItemContext.Provider>

    ) : null
  }
  return <div style={style}>{content}</div>
}

export default memo(SpaceFeedItem)
