import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { UserButton, SignedOut, SignedIn } from '@clerk/clerk-react'

import { Button } from 'primereact/button'
import {
  StyledHeader, ButtonsContainer, CivilIcon, NavContainer, Divider, MobileContainer, WalletPassesContainer,
} from './Style'
import { NavDropdownToggle, DropdownMenu } from '../../DropdownNav/Index'
import HeaderNavItem from './components/HeaderNavItem/Index'
import { UserSettingsSvg, NotificationSvg, Gavel2 } from '../../../svgs/svgs'
import useSessionType from '../../hooks/permissions/useSessionType'
import { useGetAllNotificationsQuery } from '../../../api/services/notifications.ts'
import useGetCurrentUser from '../hooks/useGetCurrentUser'
import MobileMenu from './components/MobileMenu/Index'
import SearchBar from '../../SearchBar/Index'
import TribunalTutorialModal from '../../TutorialModals/TribunalTutorialModal/TribunalTutorialModal'

function NavButtons({ setVisible }) {
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
        showOverlay
        setVisible={setVisible}
        onClick={() => navigate('/home/notifications-tribunal')}
      />
    </>

  )
}

function Header() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

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
        <Button
          text
          icon={<CivilIcon alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png" />}
          onClick={() => navigate('/home/spaces')}
          className="w-4rem p-0 border-none focus:shadow-none hover:bg-white"
        />
      </ButtonsContainer>
      <SearchBar />
      <NavContainer>
        { signedInViaCivic ? <NavButtons setVisible={setVisible} /> : null }
        <Divider />
        <NavDropdownToggle>
          <DropdownMenu />
        </NavDropdownToggle>
      </NavContainer>
      {/* { screenWidth < 1250 ? null
      (
        <MobileContainer>
          <WalletPassesContainer>
            <Divider />
          </WalletPassesContainer>

          <MobileMenu numUnreadUserNotifications={numUnreadUserNotifications} numUnreadTribunalNotifications={numUnreadTribunalNotifications} />
        </MobileContainer>
      ) 
      : null} */}
    <TribunalTutorialModal visible={visible} setVisible={setVisible} />
    </StyledHeader>
  )
}

export default Header
