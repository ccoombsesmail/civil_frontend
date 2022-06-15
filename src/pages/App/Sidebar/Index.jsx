import React, { useState } from 'react'
import {
  Container,
} from 'react-bootstrap'
// import { RiNotification2Fill } from 'react-icons/ri'
// import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { SideBarContainer, SideBarNav, ArrowContainer } from './Style/index'
import {
  NotificationSvg, UserIconSvg, ArrowRightSvg, ArrowLeftSvg,
} from '../../../svgs/svgs'
import SidebarItem from './components/SidebarItem/Index'

const Sidebar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const notifications = useSelector((s) => s.notifications.list)
  const numUnreadNotifications = notifications.filter((n) => n.isRead === false).length
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
          numUnreadNotifications={numUnreadNotifications}
          Icon={NotificationSvg}
          text="Notifications"
          onClick={() => navigate('/notifications')}
        />
      </SideBarNav>
    </SideBarContainer>
  )
}

export default Sidebar
