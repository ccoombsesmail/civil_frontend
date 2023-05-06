import React from 'react'
import { AddFriendSvg, RemoveFriendSvg } from '../../../../svgs/svgs'
import useFollowClickHandler from '../../hooks/useFollowClickHandler'

import RevealButton from '../../../CommonComponents/Buttons/RevealButton/Index'
import { HoverLink } from '../../../CommonComponents/HoverLink/Style'
import { longUsernameDisplay } from '../../../../generic/string/longUsernameDisplay'
import ExpandButton from '../../../CommonComponents/Buttons/ExpandButton/Index'
import { FollowButtonContainer, FollowBtn } from './Style'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'

function FollowButton({ isFollowing, profileUserId, username, user, isUserLoading, isUserFetching }) {
  const { onFollowBtnClick, isLoading } = useFollowClickHandler(profileUserId, user?.isFollowing)
  return (
    <FollowButtonContainer>
      {
        <FollowBtn onClick={onFollowBtnClick}>
          {
             user.isFollowing ? (

              <>
                 {(isLoading || isUserLoading || isUserFetching) ? <CircleLoading size={25}  noBackground stroke="black" /> : <RemoveFriendSvg /> }
                <b>
                  Unfollow {' '}
                  {user.username}
                </b>
              </>
            ) : (
              <>
               {(isLoading || isUserLoading || isUserFetching) ? <CircleLoading size={25}  noBackground stroke="black" /> : <AddFriendSvg /> }
            
                <b>
                  Follow {' '}
                  {user.username}
                </b>
              </>
            )
          }

        </FollowBtn>
    }
    </FollowButtonContainer>

  )
}

export default FollowButton
