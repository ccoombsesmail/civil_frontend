import React, { memo } from 'react'
import { ItemButton, NotificationMark, IconContainer } from './Style'

function HeaderNavItem({
  Icon, numUnreadNotifications, onClick, tribunal,
}) {
  return (
    <ItemButton onClick={onClick}>
      <IconContainer>
        {
        Boolean(numUnreadNotifications) && (
        <NotificationMark tribunal={tribunal}>{numUnreadNotifications}</NotificationMark>
        )
        }
        <Icon />
      </IconContainer>
    </ItemButton>
  )
}

export default memo(HeaderNavItem)
