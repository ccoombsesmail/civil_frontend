import React, { useState, useEffect } from 'react'
import { VerifiedSvg } from '../../../svgs/svgs'
import useSessionType from '../../hooks/permissions/useSessionType'
import UserIcon from '../UserIcon/Index'

import { Header } from './Style'
import ThemeTooltip from '../Tooltip/Index'

const UserInfoHeader = ({
  time, username, userId, iconSrc,
}) => {
  const [isDidUser, setIsDidUser] = useState(false)
  const session = useSessionType()

  useEffect(() => {
    (async () => {
      const { signedInViaDID } = await session
      setIsDidUser(signedInViaDID)
    })()
  }, [session])
  return (
    <Header>
      <UserIcon width="3vw" userId={userId} iconSrc={iconSrc} />
      <div>
        <time>{time}</time>
        <h2>{username}</h2>
        {isDidUser
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
}

export default UserInfoHeader
