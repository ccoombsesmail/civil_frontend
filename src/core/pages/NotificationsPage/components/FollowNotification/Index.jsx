import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../../generic/string/dateFormatter'
import { MiddleContainer, LeftContainer, ProfileIcon } from '../Style'
import UsernameAndTag from '../../../../CommonComponents/UsernameAndTag/Index'

import { NewFollower } from '../../../../../enums/notification_types'
import { AddFriendSvg } from '../../../../../svgs/svgs'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'

function FollowNotifcation({ notification }) {
  const navigate = useNavigate()
  const {
    givingUserId, givingUserUsername, givingUserIconSrc, givingUserTag, createdAt, id,
  } = notification
  return (
    <>
      <LeftContainer onClick={() => navigate(`/user/${givingUserId}`)}>
        <ProfileIcon src={givingUserIconSrc} />
        <UsernameAndTag
          userId={givingUserId}
          usernameDisplay={givingUserUsername}
          userTag={givingUserTag}
        />
      </LeftContainer>
      <MiddleContainer>
        <AddFriendSvg size="15vh" />
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

      </MiddleContainer>
      <MenuTime
        time={getTimeSince(createdAt)}
        id={id}
        eventType={NewFollower}
      />
    </>
  )
}

export default FollowNotifcation
