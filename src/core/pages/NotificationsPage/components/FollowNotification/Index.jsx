import React from 'react'
import { Link } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../../generic/string/dateFormatter'
import { ProfileIcon } from '../Style'
import UsernameAndTag from '../../../../CommonComponents/UsernameAndTag/Index'
import { Row, RowItem } from '../../../../CommonComponents/AppTable/Style'

import { NewFollower } from '../../../../../enums/notification_types'
import { AddFriendSvg } from '../../../../../svgs/svgs'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'

function FollowNotifcation({ notification }) {
  const {
    givingUserId, givingUserUsername, givingUserIconSrc, givingUserTag, createdAt, id,
  } = notification
  return (
    <tbody>
      <Row gridTemplateCols="1fr 1fr 3fr 1fr">
        <RowItem>
          <ProfileIcon src={givingUserIconSrc} />
          <UsernameAndTag
            userId={givingUserId}
            usernameDisplay={givingUserUsername}
            userTag={givingUserTag}
          />
        </RowItem>
        <RowItem>
          <AddFriendSvg size="15vh" />
        </RowItem>
        <RowItem>

          <h3>
            {' '}
            <Link to={`/user/${givingUserId}`}>
              <b>
                {longUsernameDisplay(givingUserUsername)}
              </b>
            </Link>
            {' '}
            Followed You
          </h3>
        </RowItem>
        <RowItem alignItems="flex-end">
          <MenuTime
            time={getTimeSince(createdAt)}
            id={id}
            eventType={NewFollower}
          />
        </RowItem>
      </Row>
    </tbody>
  )
}

export default FollowNotifcation
