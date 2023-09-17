import React from 'react'
import { Link } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../../generic/string/dateFormatter'

import { TribunalSelection } from '../../../../../enums/notification_types'
import { Row, RowItem } from '../../../../CommonComponents/AppTable/Style'
import UsernameAndTag from '../../../../CommonComponents/UsernameAndTag/Index'
import { ProfileIcon } from '../../../NotificationsPage/components/Style'

function TribunalSelectionNotification({ notification }) {
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
            You have been selected for Jury Duty regarding this
            {' '}
            <Link to={`/tribunal/${contentType}/${reportedContentId}`}>
              { contentType[0].toUpperCase() + contentType.slice(1).toLowerCase()}
            </Link>
          </h3>
        </RowItem>
        <RowItem alignItems="flex-end">
          <MenuTime
            time={getTimeSince(createdAt)}
            id={id}
            eventType={TribunalSelection}
          />
        </RowItem>
      </Row>
    </div>
  )
}

export default TribunalSelectionNotification
