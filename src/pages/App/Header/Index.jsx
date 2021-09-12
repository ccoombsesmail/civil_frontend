import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import uiActionCreators from '../../../redux/actions/ui'
import sessionActionCreators from '../../../redux/actions/session'

import Button from '../../CommonComponents/Button/Index'
import { StyledHeader, ButtonsContainer } from './Style'

import { SIGN_UP, SIGN_IN } from '../Modal/Index'
import usePermission from '../../hooks/usePermission'

const Header = () => {
  const history = useHistory()
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  const { logout } = bindActionCreators(sessionActionCreators, dispatch)
  return (
    <StyledHeader>
      <ButtonsContainer>
        <Button type="button" onClick={() => history.push('/topics')}>
          Home
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
    </StyledHeader>
  )
}

export default Header
