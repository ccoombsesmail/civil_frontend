import React from 'react'

import { Header, Thumb } from './Style'

const UserInfoHeader = ({ iconSrc, time, username }) => (
  <Header>
    <Thumb src={iconSrc} />
    <div>
      <time>{time}</time>
      <h3>{`@${username} says...`}</h3>
    </div>
  </Header>
)

export default UserInfoHeader
