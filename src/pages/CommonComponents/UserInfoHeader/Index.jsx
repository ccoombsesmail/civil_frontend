import React from 'react'
import { VerifiedSvg } from '../../../svgs/svgs'
import UserIcon from '../UserIcon/Index'

import { Header } from './Style'
import ThemeTooltip from '../Tooltip/Index'

const UserInfoHeader = ({
  time, username, userId, iconSrc, topicCreatorIsDidUser,
}) => (
  <Header>
    <UserIcon width="3vw" userId={userId} iconSrc={iconSrc} />
    <div>
      <time>{time}</time>
      <h2>{username}</h2>
      {topicCreatorIsDidUser
        && (
        <ThemeTooltip
          Icon={VerifiedSvg}
          tooltipHeader="Verification Status"
          tooltipText="This Is a DID Verified User"
        />
        )}
      <h3>{`@${username} says...`}</h3>

    </div>
  </Header>
)

export default UserInfoHeader
