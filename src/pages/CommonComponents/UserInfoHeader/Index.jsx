import React from 'react'
import UserIcon from '../UserIcon/Index'

import { Header } from './Style'

const UserInfoHeader = ({ time, username, iconSrc }) => (
  <Header>
    <UserIcon width="3vw" username={username} iconSrc={iconSrc} />
    <div>
      <time>{time}</time>
      <h3>{`@${username} says...`}</h3>
    </div>
  </Header>
)

export default UserInfoHeader
