import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserButton, SignedOut, SignedIn, useClerk } from '@clerk/clerk-react'

import IconButton from '../../CommonComponents/IconButton/Index'
import { NavDropdownToggle, DropdownMenu } from '../../DropdownNav/Index'
import { StyledHeader, ButtonsContainer, CivilIcon } from './Style'
import useIsLoggedInViaDID from '../../DID/hooks/useIsLoggedInViaDID'

const Header = () => {
  const navigate = useNavigate()
  const loggedInViaDID = useIsLoggedInViaDID()
  const clerk = useClerk()
  return (
    <StyledHeader>
      <ButtonsContainer>
        <IconButton icon={<CivilIcon alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />} onClick={() => navigate('/topics')}>
          Civil
        </IconButton>
      </ButtonsContainer>
      <SignedIn>
        <UserButton userProfileUrl="/dashboard" />
      </SignedIn>
      <SignedOut>
        <NavDropdownToggle>
          <DropdownMenu />
        </NavDropdownToggle>
        {/* <ProfileIcon src={user?.iconSrc} /> */}

      </SignedOut>
    </StyledHeader>
  )
}

export default Header
