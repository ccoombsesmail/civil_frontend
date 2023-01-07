import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserButton, SignedOut, SignedIn } from '@clerk/clerk-react'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import {
  StyledHeader, ButtonsContainer, CivilIcon, NavContainer, Divider, MobileContainer, WalletPassesContainer,
} from './Style'
import { NavDropdownToggle, DropdownMenu } from '../../DropdownNav/Index'
import IconButton from '../../CommonComponents/IconButton/Index'
import HeaderNavItem from './components/HeaderNavItem/Index'
import { UserSettingsSvg, NotificationSvg, Gavel2 } from '../../../svgs/svgs'
import useSessionType from '../../hooks/permissions/useSessionType'
import { useGetAllNotificationsQuery } from '../../../api/services/notifications.ts'
import useGetCurrentUser from '../hooks/useGetCurrentUser'
import MobileMenu from './components/MobileMenu/Index'
import { CaptchaGatewayMobile } from '../../../civic/components/CaptchGateway/CaptchaGateway'

const NavButtons = () => {
  const navigate = useNavigate()
  const { currentUser } = useGetCurrentUser()
  const { data } = useGetAllNotificationsQuery(currentUser?.userId, {
    skip: !currentUser,
  })
  const { userNotifications, tribunalNotifications } = data || {}
  const [numUnreadUserNotifications, numUnreadTribunalNotifications] = [
    userNotifications?.filter((n) => n.isRead === false).length,
    tribunalNotifications?.filter((n) => n.isRead === false).length,
  ]

  return (
    <>
      <HeaderNavItem
        Icon={UserSettingsSvg}
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
    signedInViaCivic,
  } = useSessionType()
  const { currentUser } = useGetCurrentUser()
  const { data } = useGetAllNotificationsQuery(currentUser?.userId, {
    skip: !currentUser,
  })
  const { userNotifications, tribunalNotifications } = data || {}
  const [numUnreadUserNotifications, numUnreadTribunalNotifications] = [
    userNotifications?.filter((n) => n.isRead === false).length,
    tribunalNotifications?.filter((n) => n.isRead === false).length,
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
      <MobileContainer>
        <WalletPassesContainer>
          <CaptchaGatewayMobile />
          <WalletMultiButton />
          <Divider />
        </WalletPassesContainer>

        <MobileMenu numUnreadUserNotifications={numUnreadUserNotifications} numUnreadTribunalNotifications={numUnreadTribunalNotifications} />
      </MobileContainer>

    </StyledHeader>
  )
}

export default Header
