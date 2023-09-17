import React from 'react'
import { Link } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../../generic/string/dateFormatter'

import { UserContentReported } from '../../../../../enums/notification_types'
import { Row, RowItem } from '../../../../CommonComponents/AppTable/Style'
import { ProfileIcon } from '../../../NotificationsPage/components/Style'
import UsernameAndTag from '../../../../CommonComponents/UsernameAndTag/Index'

function UserContentReportedNotification({ notification }) {
  const {
    createdAt, id, contentType, reportedContentId,
  } = notification
  return (
    <div>
      <Row gridTemplateCols="1fr 4fr .1fr">
        <RowItem>
          <ProfileIcon src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png" />
          <UsernameAndTag
            userId="Civil"
            usernameDisplay="Civil"
            userTag="Civil"
          />
        </RowItem>
        <RowItem className="ml-3" alignItems="flex-start">

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
        </RowItem>
        <RowItem alignItems="flex-end">
          <MenuTime
            time={getTimeSince(createdAt)}
            id={id}
            eventType={UserContentReported}
          />
        </RowItem>
      </Row>
    </div>

  )
}

export default UserContentReportedNotification
