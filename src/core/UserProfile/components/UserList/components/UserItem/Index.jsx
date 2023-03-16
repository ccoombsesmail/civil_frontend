/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from 'react'
import UserIcon from '../../../../../CommonComponents/UserIcon/Index'
import { Row, RowItem } from '../../../../../CommonComponents/AppTable/Style'
import UsernameAndTag from '../../../../../CommonComponents/UsernameAndTag/Index'
import ItemMenu from '../../../../../CommonComponents/ItemMenu/Index'

function UserItem({
  userId, iconSrc, username, userTag, bio,
}) {
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
          {/* { isCurrentUserProfile ? <ExpandButton onClick={followClickHandler} width="clamp(120px, 10vw, 300px)">Unfollow</ExpandButton> : null } */}
          {bio}
        </RowItem>
        <RowItem alignItems="flex-end">
          <ItemMenu
            menuType="Follows"
            time="4d"
            userId={userId}
            username={username}
          />
        </RowItem>
      </Row>
    </tbody>

  )
}

export default memo(UserItem)
