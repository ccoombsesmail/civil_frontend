import React from 'react'
import {
  RemoveFriendSvg,
} from '../../../../svgs/svgs'
import {
  ActionMenuItem,
} from '../Style/index'
import useFollowClickHandler from '../../../pages/UserProfile/hooks/useFollowClickHandler'
import { longUsernameDisplay } from '../../../../generic/string/longUsernameDisplay'

function FollowsItemSet({ userId, username }) {
  const { onFollowBtnClick } = useFollowClickHandler(userId, true)
  return (
    <ActionMenuItem onClick={onFollowBtnClick}>
      <RemoveFriendSvg />
      <span>
        Unfollow
        {' '}
        {longUsernameDisplay(username)}
      </span>
    </ActionMenuItem>
  )
}

export default FollowsItemSet
