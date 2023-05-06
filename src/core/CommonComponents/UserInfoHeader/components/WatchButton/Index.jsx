import React, { memo } from 'react'
import { WatchIcon } from './Style'
import useAddRemoveTopicFollow from './hooks/useAddRemoveTopicFollow'




function WatchButton({ topic }) {
  const { onFollowBtnClick, isLoading } = useAddRemoveTopicFollow(topic)
  return (
    <>
    {
      topic.isFollowing ? (
        <WatchIcon onClick={onFollowBtnClick} src='https://civil-dev.s3.us-west-1.amazonaws.com/assets/monitor-icon-slash.png' alt=''/>
      ) : (
        <WatchIcon onClick={onFollowBtnClick} src='https://civil-dev.s3.us-west-1.amazonaws.com/assets/monitor-icon.png' alt=''/>
      )
    }
    
    </>

  )
}


export default memo(WatchButton)