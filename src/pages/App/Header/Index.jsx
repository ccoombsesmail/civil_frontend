import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { UserButton } from '@clerk/clerk-react'

import sessionActionCreators from '../../../redux/actions/session'

import IconButton from '../../CommonComponents/IconButton/Index'
import { NavDropdownToggle, DropdownMenu } from '../../DropdownNav/Index'
import { StyledHeader, ButtonsContainer, ProfileIcon } from './Style'

const Header = () => {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const { logout } = bindActionCreators(sessionActionCreators, dispatch)
  // const user = useSelector((s) => s.session.currentUser)
  return (
    <StyledHeader>
      <ButtonsContainer>
        <IconButton icon={<img alt="" src="/assets/handshake.png" />} onClick={() => navigate('/topics')}>
          Civil
        </IconButton>
      </ButtonsContainer>
      <UserButton userProfileUrl="/dashboard" />
      {/* <NavDropdownToggle icon={<ProfileIcon src={user?.iconSrc} />}>
        <DropdownMenu logout={logout} />
      </NavDropdownToggle> */}
      {/* <ProfileIcon src={user?.iconSrc} /> */}
    </StyledHeader>
  )
}

export default Header
