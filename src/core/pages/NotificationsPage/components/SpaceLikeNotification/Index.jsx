import React from 'react'
import { Link } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../../generic/string/dateFormatter'
import UsernameAndTag from '../../../../CommonComponents/UsernameAndTag/Index'
import { ProfileIcon } from '../Style'

import { SpaceLike } from '../../../../../enums/notification_types'
import { LikeClickedSvg } from '../../../../../svgs/svgs'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'
import { Row, RowItem } from '../../../../CommonComponents/AppTable/Style'

function SpaceLikeNotification({ notification }) {
  const {
    givingUserId, givingUserUsername, givingUserIconSrc,
    givingUserTag, spaceId,
  } = notification
  const handleClick = (e) => {
    e.stopPropagation()
  }
  return (
    <tbody>
      <Row gridTemplateCols="1fr 1fr 3fr 1fr">
        <RowItem>
          <ProfileIcon src={givingUserIconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'} />
          <UsernameAndTag
            userId={givingUserId}
            usernameDisplay={givingUserUsername}
            userTag={givingUserTag}
          />
        </RowItem>
        <RowItem>
          <LikeClickedSvg />
        </RowItem>
        <RowItem>

          <h3>
            <b>
              {longUsernameDisplay(givingUserUsername)}
            </b>
            {' '}
            Liked Your
            {' '}
            <Link onClick={handleClick} to={`/home/spaces/${spaceId}/discussions`}>
              Space!
            </Link>
            {' '}
            😊
          </h3>
        </RowItem>
        <RowItem alignItems="flex-end">
          <MenuTime
            time={getTimeSince(notification.createdAt)}
            id={notification.id}
            eventType={SpaceLike}
          />
        </RowItem>
      </Row>
    </tbody>
  )
}

export default SpaceLikeNotification
