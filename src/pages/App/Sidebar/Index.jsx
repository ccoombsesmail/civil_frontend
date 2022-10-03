import React, { useState } from 'react'
// import { RiNotification2Fill } from 'react-icons/ri'
// import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { SideBarContainer, SideBarNav, ArrowContainer } from './Style/index'
import {
  NotificationSvg, UserIconSvg, ArrowRightSvg, ArrowLeftSvg, Gavel2,
} from '../../../svgs/svgs'
import SidebarItem from './components/SidebarItem/Index'

const Sidebar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const { userNotificationsList, tribunalNotificationsList } = useSelector((s) => s.notifications)
  const [numUnreadUserNotifications, numUnreadTribunalNotifications] = [
    userNotificationsList?.filter((n) => n.isRead === false).length,
    tribunalNotificationsList?.filter((n) => n.isRead === false).length,
  ]
  return (
    <SideBarContainer isOpen={open}>
      <ArrowContainer>
        {open
          ? <ArrowLeftSvg onClick={() => setOpen((prev) => !prev)} />
          : <ArrowRightSvg onClick={() => setOpen((prev) => !prev)} />}
      </ArrowContainer>
      <SideBarNav isOpen={open}>
        <SidebarItem
          Icon={UserIconSvg}
          text="Profile"
          onClick={() => navigate('/dashboard')}
        />
        <SidebarItem
          numUnreadNotifications={numUnreadUserNotifications}
          Icon={NotificationSvg}
          text="Notifications"
          onClick={() => navigate('/notifications')}
        />
        <SidebarItem
          numUnreadNotifications={numUnreadTribunalNotifications}
          Icon={Gavel2}
          text="Tribunal"
          onClick={() => navigate('/notifications-tribunal')}
        />
      </SideBarNav>
    </SideBarContainer>
  )
}

export default Sidebar
