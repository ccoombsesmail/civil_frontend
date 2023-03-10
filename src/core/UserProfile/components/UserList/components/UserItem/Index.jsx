/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from 'react'
import { UsernameContainer } from './Style/index'
import UserIcon from '../../../../../CommonComponents/UserIcon/Index'
import useGoToUserProfile from '../../../../../hooks/routing/useGoToUserProfile'
import { Button } from '../../../../../CommonComponents/Button/Style/index'
import { Row, RowItem } from '../../../../../CommonComponents/AppTable/Style'
import { MenuTime } from '../../../../../pages/NotificationsPage/components/MenuTime/Index'
import UsernameAndTag from '../../../../../CommonComponents/UsernameAndTag/Index'
import ExpandButton from '../../../../../CommonComponents/Buttons/ExpandButton/Index'

function UserItem({
  userId, iconSrc, time, username, userTag, bio
}) {
  const usernameDisplay = userId?.startsWith('did') ? `${username.substring(0, 12)}` : username
  const goToUserProfile = useGoToUserProfile(userId)
  return (
    <tbody>
      <Row gridTemplateCols="1fr 1fr 1fr">
        <RowItem alignItems="flex-start">
          <UserIcon width="3vw" userId={userId} iconSrc={iconSrc} />
          <UsernameAndTag
            userId={userId}
            usernameDisplay={username}
            userTag={userTag}
          />
        </RowItem>

        <RowItem>
          <ExpandButton width="clamp(120px, 10vw, 300px)">Unfollow</ExpandButton>
          {bio}
        </RowItem>
        <RowItem alignItems="flex-end">
          <MenuTime
            time={null}
          />
        </RowItem>
      </Row>
    </tbody>

  )
}

export default memo(UserItem)
