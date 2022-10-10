import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import UsernameAndTag from '../../../CommonComponents/UsernameAndTag/Index'
import { getTimeSince } from '../../../../generic/string/dateFormatter'
import { LeftContainer, MiddleContainer, ProfileIcon } from '../Style'

import { CommentCivilityGiven } from '../../../../enums/notification_types'

const CommentCivilityNotifcation = ({ notification }) => {
  const {
    givingUserId, givingUserUsername, givingUserIconSrc,
    givingUserTag, topicId, subtopicId, commentId,
  } = notification
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.stopPropagation()
  }
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
        {
          notification.new < 0 ? (
            <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png" />
          ) : (
            <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png" />
          )
        }
        <h3>
          <b style={{ marginRight: '5px' }}>
            {givingUserUsername}
          </b>
          Updated Civility Given For Your
          <Link onClick={handleClick} to={`/topics/${topicId}/subtopics/${subtopicId}/comments/${commentId}`} style={{ margin: '0 5px' }}>
            Comment
          </Link>
          {`from ${notification.old.toFixed(2)} to ${notification.new.toFixed(2)} Civility ${notification.old < notification.new ? '😊' : '☹️'}`}
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
