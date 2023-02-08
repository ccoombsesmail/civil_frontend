/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from 'react'
import { Container, UsernameContainer } from './Style/index'
import ThemeTooltip from '../../../../../CommonComponents/Tooltip/Index'
import UserIcon from '../../../../../CommonComponents/UserIcon/Index'
import useOpenDidExplorer from '../../../../../CommonComponents/UserInfoHeader/hooks/useOpenDidExplorer'
import useGoToUserProfile from '../../../../../hooks/routing/useGoToUserProfile'
import { VerifiedSvg } from '../../../../../../svgs/svgs'
import { Button } from '../../../../../CommonComponents/Button/Style/index';

const UserItem = ({
  userId, iconSrc, time, username, userTag, isDidUser,
}) => {
  const usernameDisplay = userId?.startsWith('did') ? `${username.substring(0, 12)}` : username
  const openDidExplorer = useOpenDidExplorer(username)
  const goToUserProfile = useGoToUserProfile(userId)
  return (
    <Container>
      <UserIcon width="3vw" userId={userId} iconSrc={iconSrc} />
      <div>
        <time>{`Joined ${time} ago`}</time>
        <UsernameContainer>
          <h2>{usernameDisplay}</h2>
          <h3 onClick={goToUserProfile} onKeyPress={goToUserProfile}>
            {`@${userTag || usernameDisplay}`}
          </h3>
        </UsernameContainer>
        {isDidUser
      && (
      <ThemeTooltip
        onClick={openDidExplorer}
        Icon={VerifiedSvg}
        tooltipHeader="Verification Status"
        tooltipText={`This Is a DID Verified User with ID: ${username}`}
      />
      )}
      </div>
      <Button>Unfollow</Button>
    </Container>

  )
}

export default memo(UserItem)
