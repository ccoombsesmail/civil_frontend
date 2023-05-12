import React from 'react'
import { useGetAllFollowedSpacesQuery, useLazyGetAllFollowedSpacesQuery } from '../../../../../../../../../api/services/spaces'
import { CircleLoading } from '../../../../../../../../../svgs/spinners/CircleLoading.jsx';
import { SpaceItemContext } from '../../../SpaceItem/SpaceItemContex.jsx';
import SpaceItem from '../../../SpaceItem/Index.jsx';
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser.js';

function FollowedSpaceItem({ index, style }) {
  const { data, isLoading, isUninitialized } = useGetAllFollowedSpacesQuery();
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
          currentPage={Math.floor(index/5)}
        />
      </SpaceItemContext.Provider>

     ) : null    
  }
  return <div style={style}>{content}</div>
}

export default FollowedSpaceItem