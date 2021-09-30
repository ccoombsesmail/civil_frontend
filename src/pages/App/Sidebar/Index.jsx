import React, { useState } from 'react'
import { Collapse, OverlayTrigger, Tooltip, Container } from 'react-bootstrap'
import IconButton from '../../CommonComponents/IconButton/Index';
import { RiUser3Fill, RiNotification2Fill } from 'react-icons/ri'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'

import { SideBarContainer, SideBarNav } from './Style/index'
import { useHistory } from 'react-router';

const Sidebar = () => {
  const history = useHistory()
  const [open, setOpen] = useState(false);

  return (
    <SideBarContainer isOpen={open}>
      <OverlayTrigger
        placement="right"
        overlay={<Tooltip>
          <strong>{open ? "Collapse" : "Expand"}</strong>.
        </Tooltip>}
      >
        <Container>
          {open ? <BsArrowBarLeft size={25} onClick={() => setOpen(!open)} /> : <BsArrowBarRight size={25} onClick={() => setOpen(!open)} />}
        </Container>

      </OverlayTrigger>

      <SideBarNav>
        <li>
          <RiUser3Fill size={25} onClick={() => history.push('/dashboard')} />
          {open && 'Profile'}
        </li>
        <li>
          <RiNotification2Fill size={25} />
          {open && 'Notifications'}
        </li>
      </SideBarNav>
    </SideBarContainer>
  );
}


export default Sidebar