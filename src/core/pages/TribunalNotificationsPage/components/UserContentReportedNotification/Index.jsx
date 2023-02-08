import React from 'react'
import { Link } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../../generic/string/dateFormatter'
import { MiddleContainer } from '../Style'

import { UserContentReported } from '../../../../../enums/notification_types'
import { Gavel2 } from '../../../../../svgs/svgs'

function UserContentReportedNotification({ notification }) {
  const {
    createdAt, id, contentType, reportedContentId,
  } = notification
  return (
    <>
      <MiddleContainer>
        <Gavel2 size="5vh" />
        <h3>
          Your
          {' '}
          <Link to={`/tribunal/${contentType}/${reportedContentId}`}>
            Content
          </Link>
          {' '}
          Has Been Reported And Is Subject To Community Tribunal Review!
          {' '}
          {'\n'}
          <Link to={`/tribunal/${contentType}/${reportedContentId}`}>
            Click To Defend Yourself!
          </Link>
        </h3>
      </MiddleContainer>
      <MenuTime
        time={getTimeSince(createdAt)}
        id={id}
        eventType={UserContentReported}
      />
    </>
  )
}

export default UserContentReportedNotification
