import React, { useState } from 'react'
import {
  OverlayTrigger, Tooltip, Container,
} from 'react-bootstrap'
// import { RiNotification2Fill } from 'react-icons/ri'
// import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'
import { SideBarContainer, SideBarNav } from './Style/index'
import {
  NotificationSvg, UserIconSvg, ArrowRightSvg, ArrowLeftSvg,
} from '../../../svgs/svgs'

const Sidebar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <SideBarContainer isOpen={open}>
      <OverlayTrigger
        placement="right"
        overlay={(
          <Tooltip>
            <strong>{open ? 'Collapse' : 'Expand'}</strong>
          </Tooltip>
        )}
      >
        <Container>
          {/* {open
            ? <BsArrowBarLeft size={25} onClick={() => setOpen(!open)} />
            : <BsArrowBarRight size={25} onClick={() => setOpen(!open)} />} */}
          {open
            ? <ArrowLeftSvg onClick={() => setOpen(!open)} />
            : <ArrowRightSvg onClick={() => setOpen(!open)} />}
        </Container>
      </OverlayTrigger>

      <SideBarNav>
        <button type="button" onClick={() => navigate('/dashboard')}>
          {/* <RiUser3Fill size={20} /> */}
          <UserIconSvg />
          {open && 'Profile'}
        </button>
        <button type="button">
          {/* <RiNotification2Fill size={20} /> */}
          <NotificationSvg />
          {open && 'Notifications'}
        </button>
      </SideBarNav>
    </SideBarContainer>
  )
}

export default Sidebar
