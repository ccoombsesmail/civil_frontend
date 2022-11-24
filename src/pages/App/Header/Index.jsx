import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserButton, SignedOut, SignedIn } from '@clerk/clerk-react'

import { useSelector } from 'react-redux'
import {
  StyledHeader, ButtonsContainer, CivilIcon, NavContainer, Divider,
} from './Style'
import { NavDropdownToggle, DropdownMenu } from '../../DropdownNav/Index'
import IconButton from '../../CommonComponents/IconButton/Index'
import HeaderNavItem from './components/HeaderNavItem/Index'
import { UserIconSvg, NotificationSvg, Gavel2 } from '../../../svgs/svgs'
import useSessionType from '../../hooks/permissions/useSessionType'

const NavButtons = () => {
  const navigate = useNavigate()
  const { userNotificationsList, tribunalNotificationsList } = useSelector((s) => s.notifications)
  const [numUnreadUserNotifications, numUnreadTribunalNotifications] = [
    userNotificationsList?.filter((n) => n.isRead === false).length,
    tribunalNotificationsList?.filter((n) => n.isRead === false).length,
  ]

  return (
    <>
      <HeaderNavItem
        Icon={UserIconSvg}
        text="Profile"
        onClick={() => navigate('/dashboard')}
      />
      <HeaderNavItem
        numUnreadNotifications={numUnreadUserNotifications}
        Icon={NotificationSvg}
        text="Notifications"
        onClick={() => navigate('/home/notifications')}
      />
      <HeaderNavItem
        numUnreadNotifications={numUnreadTribunalNotifications}
        Icon={Gavel2}
        text="Tribunal"
        onClick={() => navigate('/home/notifications-tribunal')}
      />
    </>

  )
}

const Header = () => {
  const navigate = useNavigate()
  const {
    signedInViaClerk,
    signedInViaDID,
    signedInViaCivic,
  } = useSessionType()
  return (
    <StyledHeader>
      <ButtonsContainer>
        <IconButton icon={<CivilIcon alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />} onClick={() => navigate('/home/topics')}>
          Civil
        </IconButton>
      </ButtonsContainer>
      <SignedIn>
        <NavContainer>
          <NavButtons />
          <Divider />
          <UserButton
            userProfileUrl="/dashboard"
            afterSignOutUrl="/"
            userProfileMode="navigation"
            appearance={{
              variables: {
                fontSize: '1.2vw',
                fontSmoothing: 'antialiased',
                fontWeight: 600,
                fontFamily: 'Source Sans Pro, sans-serif',
              },
            }}
          />
        </NavContainer>

      </SignedIn>
      <SignedOut>
        <NavContainer>
          { signedInViaCivic ? <NavButtons /> : null }
          <Divider />
          <NavDropdownToggle>
            <DropdownMenu />
          </NavDropdownToggle>
        </NavContainer>

      </SignedOut>
    </StyledHeader>
  )
}

export default Header
