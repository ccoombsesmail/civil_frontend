import React, { useState } from 'react'
import {
  Container,
} from 'react-bootstrap'
// import { RiNotification2Fill } from 'react-icons/ri'
// import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { SideBarContainer, SideBarNav } from './Style/index'
import {
  NotificationSvg, UserIconSvg, ArrowRightSvg, ArrowLeftSvg,
} from '../../../svgs/svgs'

const Sidebar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const notifications = useSelector((s) => s.notifications.list)
  console.log(notifications)
  const numUnreadNotifications = notifications.filter((n) => n.isRead === false).length
  console.log(numUnreadNotifications)
  return (
    <SideBarContainer isOpen={open}>
      <Container>
        {open
          ? <ArrowLeftSvg onClick={() => setOpen((prev) => !prev)} />
          : <ArrowRightSvg onClick={() => setOpen((prev) => !prev)} />}
      </Container>
      <SideBarNav isOpen={open}>
        <button type="button" onClick={() => navigate('/dashboard')}>
          <UserIconSvg />
          {open && 'Profile'}
        </button>
        <button type="button" onClick={() => navigate('/notifications')}>
          <NotificationSvg />
          {open && 'Notifications'}
          <span style={{ color: 'red' }}>
            {numUnreadNotifications}
          </span>
        </button>
      </SideBarNav>
    </SideBarContainer>
  )
}

export default Sidebar
