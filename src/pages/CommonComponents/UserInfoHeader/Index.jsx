import React from 'react'
import UserIcon from '../UserIcon/Index'

import { Header } from './Style'

const UserInfoHeader = ({
  time, username, userId, iconSrc,
}) => (
  <Header>
    <UserIcon width="3vw" userId={userId} iconSrc={iconSrc} />
    <div>
      <time>{time}</time>
      <h3>{`@${username} says...`}</h3>
    </div>
  </Header>
)

export default UserInfoHeader
