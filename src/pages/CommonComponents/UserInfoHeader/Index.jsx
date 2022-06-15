import React from 'react'
import { VerifiedSvg } from '../../../svgs/svgs'
import UserIcon from '../UserIcon/Index'

import { Header, UsernameContainer } from './Style'
import ThemeTooltip from '../Tooltip/Index'
import useOpenDidExplorer from './hooks/useOpenDidExplorer'

const UserInfoHeader = ({
  time, username, userId, iconSrc, topicCreatorIsDidUser,
}) => {
  const usernameDisplay = userId?.startsWith('did') ? `${username.substring(0, 12)}...` : username
  const openDidExplorer = useOpenDidExplorer(username)
  return (
    <Header>
      <UserIcon width="3vw" userId={userId} iconSrc={iconSrc} />
      <div>
        <time>{time}</time>
        <UsernameContainer>
          <h2>{usernameDisplay}</h2>
          <h3>{`@${usernameDisplay} says...`}</h3>
        </UsernameContainer>
        {topicCreatorIsDidUser
        && (
        <ThemeTooltip
          onClick={openDidExplorer}
          Icon={VerifiedSvg}
          tooltipHeader="Verification Status"
          tooltipText={`This Is a DID Verified User with ID: ${username}`}
        />
        )}
      </div>
    </Header>
  )
}

export default UserInfoHeader
