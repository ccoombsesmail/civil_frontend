/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { VerifiedSvg } from '../../../svgs/svgs'
import UserIcon from '../UserIcon/Index'

import { Header } from './Style'
import ThemeTooltip from '../Tooltip/Index'
import useOpenDidExplorer from './hooks/useOpenDidExplorer'
import UsernameAndTag from '../UsernameAndTag/Index'

const UserInfoHeader = ({
  time, username, userId, iconSrc, topicCreatorIsDidUser, userTag,
}) => {
  const usernameDisplay = userId?.startsWith('did') ? `${username.substring(0, 12)}` : username
  const openDidExplorer = useOpenDidExplorer(username)
  return (
    <Header>
      <UserIcon width="3vw" userId={userId} iconSrc={iconSrc} />
      <div>
        <time>{time}</time>
        <UsernameAndTag
          usernameDisplay={usernameDisplay}
          userId={userId}
          userTag={userTag}
        />

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
