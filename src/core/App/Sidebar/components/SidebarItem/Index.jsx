import React, { memo } from 'react'
import { ItemButton, NotificationMark, IconContainer } from './Style'

const SidebarItem = ({
  Icon, numUnreadNotifications, onClick, text,
}) => (
  <>
    <ItemButton onClick={onClick}>
      <IconContainer>
        {
        Boolean(numUnreadNotifications) && (
        <NotificationMark>{numUnreadNotifications}</NotificationMark>
        )
        }
        <Icon />
      </IconContainer>
      <span>{text}</span>
    </ItemButton>
  </>
)

export default memo(SidebarItem)
