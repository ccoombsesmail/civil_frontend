/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from 'react'
import { Avatar } from 'primereact/avatar'
import { Row, RowItem } from '../../../../../../CommonComponents/AppTable/Style'
import UsernameAndTag from '../../../../../../CommonComponents/UsernameAndTag/Index'
import ItemMenu from '../../../../../../CommonComponents/ItemMenu/Index'
import { truncateAtIndex } from '../../../../../../../generic/string/truncateAtIndex'
import useGoToUserProfile from '../../../../../../hooks/routing/useGoToUserProfile'
import { DEFAULT_PROFILE_IMAGE } from '../../../../../../../theme/constants'
import { userJoinedDate } from '../../../../../../../generic/time/userJoinedDate'

function UserItem({
  userId, iconSrc, username, tag, bio, time
}) {
  const goToUserProfile = useGoToUserProfile(userId)
  return (
    <tbody>
      <Row gridTemplateCols="1fr 1fr 1fr">
        <RowItem alignItems="flex-start">
          <Avatar shape="circle" image={iconSrc || DEFAULT_PROFILE_IMAGE} onClick={goToUserProfile} size="xlarge" />
          <UsernameAndTag
            userId={userId}
            usernameDisplay={username}
            userTag={tag}
          />
        </RowItem>

        <RowItem>
          {`${truncateAtIndex(bio || '', 80)}...`}
        </RowItem>
        <RowItem alignItems="flex-end">
          <ItemMenu
            menuType="Follows"
            time={userJoinedDate(time)}
            userId={userId}
            username={username}
          />
        </RowItem>
      </Row>
    </tbody>

  )
}

export default memo(UserItem)
