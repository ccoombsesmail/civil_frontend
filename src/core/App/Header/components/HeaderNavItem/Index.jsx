import React, { memo } from 'react'
import { Badge } from 'primereact/badge'
import { ItemButton, NotificationMark, IconContainer } from './Style'

function HeaderNavItem({
  Icon, numUnreadNotifications, onClick, tribunal,
}) {
  return (
    <ItemButton onClick={onClick} className="p-overlay-badge">
      <IconContainer>
        {
        Boolean(numUnreadNotifications) && (
          <Badge value={numUnreadNotifications} severity={tribunal ? '' : 'danger'} />
        // <NotificationMark tribunal={tribunal}>{numUnreadNotifications}</NotificationMark>
        )
        }
        <Icon />
      </IconContainer>
    </ItemButton>
  )
}

export default memo(HeaderNavItem)
