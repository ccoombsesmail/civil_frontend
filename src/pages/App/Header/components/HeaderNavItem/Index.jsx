import React, { memo } from 'react'
import { ItemButton, NotificationMark, IconContainer } from './Style'

const HeaderNavItem = ({
  Icon, numUnreadNotifications, onClick,
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
    </ItemButton>
  </>
)

export default memo(HeaderNavItem)
