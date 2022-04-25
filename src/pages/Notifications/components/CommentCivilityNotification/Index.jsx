import React from 'react'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../generic/string/dateFormatter'
import { ProfileIcon } from './Style'
import { MiddleContainer } from '../Style'

import { CommentCivilityGiven } from '../../../../enums/notification_types'

const CommentCivilityNotifcation = ({ notification }) => {
  console.log('')
  return (
    <>
      <ProfileIcon src={notification.iconSrc} />
      <MiddleContainer>
        {
          notification.value < 0 ? (
            <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png" />
          ) : (
            <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png" />
          )
        }
        <h3>
          <b style={{ marginRight: '8px' }}>
            {notification.username}
          </b>
          {`gave you ${notification.value} civility`}
        </h3>
      </MiddleContainer>
      <MenuTime
        time={getTimeSince(notification.createdAt)}
        id={notification.id}
        eventType={CommentCivilityGiven}
      />
    </>
  )
}

export default CommentCivilityNotifcation
