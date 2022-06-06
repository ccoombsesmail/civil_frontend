import React from 'react'
import { VerifiedSvg } from '../../../svgs/svgs'
import UserIcon from '../UserIcon/Index'

import { Header, UsernameContainer } from './Style'
import ThemeTooltip from '../Tooltip/Index'

const UserInfoHeader = ({
  time, username, userId, iconSrc, topicCreatorIsDidUser,
}) => (
  <Header>
    <UserIcon width="3vw" userId={userId} iconSrc={iconSrc} />
    <div>
      <time>{time}</time>
      <UsernameContainer>
        <h2>{username}</h2>
        <h3>{`@${username} says...`}</h3>
      </UsernameContainer>
      {topicCreatorIsDidUser
        && (
        <ThemeTooltip
          Icon={VerifiedSvg}
          tooltipHeader="Verification Status"
          tooltipText="This Is a DID Verified User"
        />
        )}
    </div>
  </Header>
)

export default UserInfoHeader
