import React, { useState } from 'react'
import {
  OverlayTrigger, Tooltip, Container,
} from 'react-bootstrap'
import { RiUser3Fill, RiNotification2Fill } from 'react-icons/ri'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'

import { useHistory } from 'react-router'
import { SideBarContainer, SideBarNav } from './Style/index'

const Sidebar = () => {
  const history = useHistory()
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
          {open
            ? <BsArrowBarLeft size={25} onClick={() => setOpen(!open)} />
            : <BsArrowBarRight size={25} onClick={() => setOpen(!open)} />}
        </Container>
      </OverlayTrigger>

      <SideBarNav>
        <li onClick={() => history.push('/dashboard')}>
          <RiUser3Fill size={20} />
          {open && 'Profile'}
        </li>
        <li>
          <RiNotification2Fill size={20} />
          {open && 'Notifications'}
        </li>
      </SideBarNav>
    </SideBarContainer>
  )
}

export default Sidebar
