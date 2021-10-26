import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import uiActionCreators from '../../../redux/actions/ui'
import sessionActionCreators from '../../../redux/actions/session'

import Button from '../../CommonComponents/Button/Index'
import IconButton from '../../CommonComponents/IconButton/Index'
import { NavDropdownToggle, DropdownMenu } from '../../DropdownNav/Index'
import { StyledHeader, ButtonsContainer, ProfileIcon } from './Style'

import { SIGN_UP, SIGN_IN } from '../Modal/Index'
import usePermission from '../../hooks/usePermission'

const Header = () => {
  const history = useHistory()
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  const { logout } = bindActionCreators(sessionActionCreators, dispatch)
  const user = useSelector((s) => s.session.currentUser)
  return (
    <StyledHeader>
      <ButtonsContainer>
        <IconButton icon={<img alt="" src="/assets/handshake.png" />} onClick={() => history.push('/topics')}>
          Civil
        </IconButton>
      </ButtonsContainer>
      <ButtonsContainer>
        { !loggedIn && (
          <>
            <Button type="button" onClick={() => openModal(SIGN_UP)}>
              Sign Up
            </Button>
            <Button type="button" onClick={() => openModal(SIGN_IN)}>
              Log In
            </Button>
          </>
        )}
      </ButtonsContainer>
      <NavDropdownToggle icon={<ProfileIcon src={user?.iconSrc} />}>
        <DropdownMenu logout={logout} />
      </NavDropdownToggle>
      {/* <ProfileIcon src={user?.iconSrc} /> */}
    </StyledHeader>
  )
}

export default Header
