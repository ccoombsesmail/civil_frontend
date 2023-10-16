import React from 'react'
import { AddFriendSvg, RemoveFriendSvg } from '../../../../../svgs/svgs'
import useFollowClickHandler from '../../hooks/useFollowClickHandler'

import { FollowButtonContainer, FollowBtn } from './Style'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'

function FollowButton({
  profileUserId, user, isUserLoading, isUserFetching,
}) {
  const { onFollowBtnClick, isLoading } = useFollowClickHandler(profileUserId, user?.isFollowing)
  return (
    <FollowButtonContainer>
      <FollowBtn onClick={onFollowBtnClick}>
        {
             user.isFollowing ? (

               <>
                 {(isLoading || isUserLoading || isUserFetching) ? <CircleLoading size={25} noBackground stroke="black" /> : <RemoveFriendSvg /> }
                 <b>
                   Unfollow
                   {' '}
                   {' '}
                   {longUsernameDisplay(user.username)}
                 </b>
               </>
             ) : (
               <>
                 {(isLoading || isUserLoading || isUserFetching) ? <CircleLoading size={25} noBackground stroke="black" /> : <AddFriendSvg /> }

                 <b>
                   Follow
                   {' '}
                   {' '}
                   {longUsernameDisplay(user.username)}
                 </b>
               </>
             )
          }

      </FollowBtn>
    </FollowButtonContainer>

  )
}

export default FollowButton
