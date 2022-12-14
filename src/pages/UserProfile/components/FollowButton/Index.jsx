import React from 'react'
import AnimatedIconButton from '../../../CommonComponents/IconButtonAnimated/Index'
import { AddFriendSvg, RemoveFriendSvg } from '../../../../svgs/svgs'
import useFollowClickHandler from '../../hooks/useFollowClickHandler'

import {} from './Style'

const FollowButton = ({ isFollowing, profileUserId }) => {
  const followClickHandler = useFollowClickHandler(profileUserId, isFollowing)

  return (
    <div>
      {
      isFollowing ? <AnimatedIconButton Icon={RemoveFriendSvg} buttonText="Unfollow" onClick={followClickHandler} />
        : <AnimatedIconButton Icon={AddFriendSvg} buttonText="Follow" onClick={followClickHandler} />
    }
    </div>

  )
}

export default FollowButton
