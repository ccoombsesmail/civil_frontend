import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { UserButton, SignedOut, SignedIn } from '@clerk/clerk-react'

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
import SearchBar from '../../SearchBar/Index'

function NavButtons() {
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
        tribunal
        onClick={() => navigate('/home/notifications-tribunal')}
      />
    </>

  )
}

function Header() {
  const navigate = useNavigate()
  const {
    signedInViaCivic,
  } = useSessionType()
  const { currentUser } = useGetCurrentUser()
  const { data } = useGetAllNotificationsQuery(currentUser?.userId, {
    skip: !currentUser || true,
  })
  const { userNotifications, tribunalNotifications } = data || {}
  const [numUnreadUserNotifications, numUnreadTribunalNotifications] = [
    userNotifications?.filter((n) => n.isRead === false).length,
    tribunalNotifications?.filter((n) => n.isRead === false).length,
  ]
  const screenWidth = window.screen.width

  return (
    <StyledHeader>
      <ButtonsContainer>
        <IconButton hideTextMobile icon={<CivilIcon alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png" />} onClick={() => navigate('/home/spaces')}>
          Civil
        </IconButton>
      </ButtonsContainer>
      <SearchBar />
      <NavContainer>
        { signedInViaCivic ? <NavButtons /> : null }
        <Divider />
        <NavDropdownToggle>
          <DropdownMenu />
        </NavDropdownToggle>
      </NavContainer>
      { screenWidth < 1250 ? (
        <MobileContainer>
          <WalletPassesContainer>
            <Divider />
          </WalletPassesContainer>

          <MobileMenu numUnreadUserNotifications={numUnreadUserNotifications} numUnreadTribunalNotifications={numUnreadTribunalNotifications} />
        </MobileContainer>
      ) : null}

    </StyledHeader>
  )
}

export default Header
