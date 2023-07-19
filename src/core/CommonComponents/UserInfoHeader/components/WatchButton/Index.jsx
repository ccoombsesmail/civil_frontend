import React, { memo } from 'react'
import { WatchIcon } from './Style'
import useAddRemoveSpaceFollow from './hooks/useAddRemoveSpaceFollow'

function WatchButton({ space }) {
  const { onFollowBtnClick, isLoading } = useAddRemoveSpaceFollow(space)
  return (
    <>
      {
      space.isFollowing ? (
        <WatchIcon onClick={onFollowBtnClick} src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/monitor-icon-slash.png" alt="" />
      ) : (
        <WatchIcon onClick={onFollowBtnClick} src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/monitor-icon.png" alt="" />
      )
    }

    </>

  )
}

export default memo(WatchButton)
