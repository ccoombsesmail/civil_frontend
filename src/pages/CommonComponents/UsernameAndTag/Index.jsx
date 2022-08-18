/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from 'react'
import useGoToUserProfile from '../../hooks/routing/useGoToUserProfile'
import { Container } from './Style'

const UsernameAndTag = ({
  usernameDisplay,
  userId,
  userTag,
}) => {
  const goToUserProfile = useGoToUserProfile(userId)
  return (
    <Container>
      <h2>{usernameDisplay}</h2>
      <h3 onClick={goToUserProfile} onKeyPress={goToUserProfile}>
        {`@${userTag || usernameDisplay}`}
      </h3>
    </Container>
  )
}

export default memo(UsernameAndTag)
