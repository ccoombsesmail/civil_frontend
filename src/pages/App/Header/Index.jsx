import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserButton, SignedOut, SignedIn } from '@clerk/clerk-react'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { StyledHeader, ButtonsContainer, CivilIcon } from './Style'
import { NavDropdownToggle, DropdownMenu } from '../../DropdownNav/Index'
import IconButton from '../../CommonComponents/IconButton/Index'

const Header = () => {
  const navigate = useNavigate()
  return (
    <StyledHeader>
      <ButtonsContainer>
        <IconButton icon={<CivilIcon alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />} onClick={() => navigate('/topics')}>
          Civil
        </IconButton>
      </ButtonsContainer>
      <SignedIn>
        <UserButton userProfileUrl="/dashboard" afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <WalletMultiButton />

        <NavDropdownToggle>
          <DropdownMenu />
        </NavDropdownToggle>
        {/* <ProfileIcon src={user?.iconSrc} /> */}

      </SignedOut>
    </StyledHeader>
  )
}

export default Header
