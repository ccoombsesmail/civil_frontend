import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { ItemButton, NotificationMark, IconContainer } from './Style'


const SidebarItem = ({ Icon, numUnreadNotifications }) => {

  return (
    <>
      <ItemButton>
        <IconContainer>
          {numUnreadNotifications && (<NotificationMark>{numUnreadNotifications}</NotificationMark>)}
          <Icon />
        </IconContainer>
      </ItemButton>
    </>
  )
}

export default memo(SidebarItem)
