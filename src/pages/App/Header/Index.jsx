import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import uiActionCreators from '../../../redux/actions/ui'
import sessionActionCreators from '../../../redux/actions/session'

import Button from '../../CommonComponents/Button/Index'
import { StyledHeader, ButtonsContainer, ProfileIcon } from './Style'

import { SIGN_UP, SIGN_IN } from '../Modal/Index'
import usePermission from '../../hooks/usePermission'


const Header = () => {
  const history = useHistory()
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  const { logout, updateUserIcon } = bindActionCreators(sessionActionCreators, dispatch)
  const user = useSelector(s => s.session.currentUser)
  return (
    <StyledHeader>
      <ButtonsContainer>
        <Button type="button" onClick={() => history.push('/topics')}>
          Home
        </Button>
        <Button type="button" onClick={() => updateUserIcon({
          username: user?.username,
          iconSrc: '/64_1.png'
        })}>
          Update
        </Button>
      </ButtonsContainer>
      <ButtonsContainer>
        { !loggedIn ? (
          <>
            <Button type="button" onClick={() => openModal(SIGN_UP)}>
              Sign Up
            </Button>
            <Button type="button" onClick={() => openModal(SIGN_IN)}>
              Log In
            </Button>
          </>
        ) : (
          <Button type="button" onClick={logout}>
            Log Out
          </Button>
        )}
      </ButtonsContainer>
      <ProfileIcon size={45} color={"var(--m-primary-color)"} />
    </StyledHeader>
  )
}

export default Header
