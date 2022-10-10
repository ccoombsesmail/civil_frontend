import React from 'react'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../generic/string/dateFormatter'
import { MiddleContainer } from '../Style'

import { UserContentReported } from '../../../../enums/notification_types'
import { Gavel2 } from '../../../../svgs/svgs'

const UserContentReportedNotification = ({ notification }) => {
  console.log('')
  return (
    <>
      <MiddleContainer>
        <Gavel2 size="5vh" />
        <h3>
          Your Content Has Been Reported and Subject To Community Tribunal Review!
          {' '}
          {'\n'}
          Click To Defend Yourself!
        </h3>
      </MiddleContainer>
      <MenuTime
        time={getTimeSince(notification.createdAt)}
        id={notification.id}
        eventType={UserContentReported}
      />
    </>
  )
}

export default UserContentReportedNotification
