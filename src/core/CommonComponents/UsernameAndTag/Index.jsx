/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from 'react'
import { longUsernameDisplay } from '../../../generic/string/longUsernameDisplay'
import useGoToUserProfile from '../../hooks/routing/useGoToUserProfile'
import { Container } from './Style'

function UsernameAndTag({
  usernameDisplay,
  userId,
  userTag,
}) {
  const goToUserProfile = useGoToUserProfile(userId)
  const formattedUsername = longUsernameDisplay(usernameDisplay)
  const formattedTag = longUsernameDisplay(userTag)
  return (
    <Container>
      <h2>{formattedUsername}</h2>
      <h3 onClick={goToUserProfile} onKeyPress={goToUserProfile} className='-mt-1 lg:-mt-1 xl:-mt-2 2xl:-mt-3'>
        {`@${formattedTag || formattedUsername}`}
      </h3>
    </Container>
  )
}

export default memo(UsernameAndTag)
