import React from 'react'
import { AddFriendSvg, RemoveFriendSvg } from '../../../../svgs/svgs'
import useFollowClickHandler from '../../hooks/useFollowClickHandler'

import RevealButton from '../../../CommonComponents/Buttons/RevealButton/Index'
import { HoverLink } from '../../../CommonComponents/HoverLink/Style'
import { longUsernameDisplay } from '../../../../generic/string/longUsernameDisplay'

const FollowButton = ({ isFollowing, profileUserId, username }) => {
  const followClickHandler = useFollowClickHandler(profileUserId, isFollowing)
  return (
    <div>
      {
      isFollowing ? (
        <RevealButton Icon={RemoveFriendSvg} buttonText="Unfollow" onClick={followClickHandler} size="3.5vw">
          <HoverLink>
            Unfollow
            {' '}
            <span>
              {longUsernameDisplay(username)}
            </span>
          </HoverLink>
        </RevealButton>
      )
        : (
          <RevealButton Icon={AddFriendSvg} buttonText="Follow" onClick={followClickHandler} size="3.5vw">
            <HoverLink>
              Follow
              {' '}
              <span>
                {longUsernameDisplay(username)}
              </span>
            </HoverLink>
          </RevealButton>
        )
    }
    </div>

  )
}

export default FollowButton
