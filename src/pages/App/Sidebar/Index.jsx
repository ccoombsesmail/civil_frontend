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
      {/* <OverlayTrigger
        placement="right"
        overlay={(
          <Tooltip>
            <strong>{open ? 'Collapse' : 'Expand'}</strong>
          </Tooltip>
        )}
      > */}
      <Container>
        {open
          ? <ArrowLeftSvg onClick={() => setOpen((prev) => !prev)} />
          : <ArrowRightSvg onClick={() => setOpen((prev) => !prev)} />}
      </Container>
      {/* </OverlayTrigger> */}

      <SideBarNav isOpen={open}>
        <button type="button" onClick={() => navigate('/dashboard')}>
          <UserIconSvg />
          {open && 'Profile'}
        </button>
        <button type="button">
          <NotificationSvg />
          {open && 'Notifications'}
        </button>
      </SideBarNav>
    </SideBarContainer>
  )
}

export default Sidebar
