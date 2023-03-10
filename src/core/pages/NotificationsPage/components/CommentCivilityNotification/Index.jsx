import React from 'react'
import { Link } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import UsernameAndTag from '../../../../CommonComponents/UsernameAndTag/Index'
import { getTimeSince } from '../../../../../generic/string/dateFormatter'
import { ProfileIcon } from '../Style'
import { Row, RowItem } from '../../../../CommonComponents/AppTable/Style'

import { CommentCivilityGiven } from '../../../../../enums/notification_types'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'

function CommentCivilityNotifcation({ notification }) {
  const {
    givingUserId, givingUserUsername, givingUserIconSrc,
    givingUserTag, topicId, discussionId, commentId, createdAt, old, new: newVal, id,
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
          {
          notification.new < 0 ? (
            <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png" />
          ) : (
            <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png" />
          )
        }
        </RowItem>
        <RowItem>

          <h3>
            <b>
              {longUsernameDisplay(givingUserUsername)}
            </b>
            {' '}
            Updated Civility Given For Your
            {' '}
            <Link onClick={handleClick} to={`/home/topics/${topicId}/discussions/${discussionId}/comments/${commentId}`}>
              Comment
            </Link>
            {' '}
            {`from ${old.toFixed(2)} to ${newVal.toFixed(2)} Civility ${old < newVal ? '😊' : '☹️'}`}
          </h3>
        </RowItem>
        <RowItem alignItems="flex-end">
          <MenuTime
            time={getTimeSince(createdAt)}
            id={id}
            eventType={CommentCivilityGiven}
          />
        </RowItem>
      </Row>
    </tbody>
  )
}

export default CommentCivilityNotifcation
