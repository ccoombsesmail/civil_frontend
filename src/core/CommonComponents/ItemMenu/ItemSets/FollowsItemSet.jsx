import React from 'react'
import {
  RemoveFriendSvg,
} from '../../../../svgs/svgs'
import {
  ActionMenuItem,
} from '../Style/index'
import useFollowClickHandler from '../../../pages/UserProfile/hooks/useFollowClickHandler'

function FollowsItemSet({ userId, username }) {
  const followClickHandler = useFollowClickHandler(userId, true)
  return (
    <ActionMenuItem onClick={followClickHandler}>
      <RemoveFriendSvg />
      <span>
        Unfollow
        {' '}
        {username}
      </span>
    </ActionMenuItem>
  )
}

export default FollowsItemSet
