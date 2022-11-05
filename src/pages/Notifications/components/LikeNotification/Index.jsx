import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../generic/string/dateFormatter'
import UsernameAndTag from '../../../CommonComponents/UsernameAndTag/Index'
import { LeftContainer, MiddleContainer, ProfileIcon } from '../Style'

import { CommentLike } from '../../../../enums/notification_types'
import { LikeClickedSvg } from '../../../../svgs/svgs'

const CommentLikeNotification = ({ notification }) => {
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
        <h3>
          <b>
            {givingUserUsername}
          </b>
          {' '}
          Liked Your
          {' '}
          <Link onClick={handleClick} to={`/topics/${topicId}/subtopics/${subtopicId}/comments/${commentId}`}>
            Comment!
          </Link>
          {' '}
          😊
        </h3>
        <LikeClickedSvg />

      </MiddleContainer>
      <MenuTime
        time={getTimeSince(notification.createdAt)}
        id={notification.id}
        eventType={CommentLike}
      />
    </>
  )
}

export default CommentLikeNotification
