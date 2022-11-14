import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserButton, SignedOut, SignedIn } from '@clerk/clerk-react'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useSelector } from 'react-redux'
import {
  StyledHeader, ButtonsContainer, CivilIcon, NavContainer, Divider,
} from './Style'
import { NavDropdownToggle, DropdownMenu } from '../../DropdownNav/Index'
import IconButton from '../../CommonComponents/IconButton/Index'
import HeaderNavItem from './components/HeaderNavItem/Index'
import { UserIconSvg, NotificationSvg, Gavel2 } from '../../../svgs/svgs'

const Header = () => {
  const navigate = useNavigate()

  const { userNotificationsList, tribunalNotificationsList } = useSelector((s) => s.notifications)
  const [numUnreadUserNotifications, numUnreadTribunalNotifications] = [
    userNotificationsList?.filter((n) => n.isRead === false).length,
    tribunalNotificationsList?.filter((n) => n.isRead === false).length,
  ]
  return (
    <StyledHeader>
      <ButtonsContainer>
        <IconButton icon={<CivilIcon alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />} onClick={() => navigate('/home/topics')}>
          Civil
        </IconButton>
      </ButtonsContainer>
      <SignedIn>
        <NavContainer>
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
        {/* <WalletMultiButton /> */}

        <NavDropdownToggle>
          <DropdownMenu />
        </NavDropdownToggle>
        {/* <ProfileIcon src={user?.iconSrc} /> */}

      </SignedOut>
    </StyledHeader>
  )
}

export default Header
