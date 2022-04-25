import React from 'react'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../generic/string/dateFormatter'
import { ProfileIcon } from './Style'
import { MiddleContainer } from '../Style'

import { NewFollower } from '../../../../enums/notification_types'
import { AddFriendSvg } from '../../../../svgs/svgs'

const FollowNotifcation = ({ notification }) => {
  console.log('')
  return (
    <>
      <ProfileIcon src={notification.iconSrc} />
      <MiddleContainer>
        <AddFriendSvg size="5vh" />
        <h3>
          <b style={{ marginRight: '8px' }}>
            {notification.username}
          </b>
          followed you
        </h3>

      </MiddleContainer>
      <MenuTime
        time={getTimeSince(notification.createdAt)}
        id={notification.id}
        eventType={NewFollower}
      />
    </>
  )
}

export default FollowNotifcation
