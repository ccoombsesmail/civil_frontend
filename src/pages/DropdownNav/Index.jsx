/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react'

import {
  SignedOut,
} from '@clerk/clerk-react'

import { useLocation } from 'react-router-dom'
import { UserIconSvg, LoginSvg, AuthenticationSvg } from '../../svgs/svgs'

import {
  NavItem, IconNavButton, DropdownMenuContainer, Menu,
  MenuItem, UserInfoSection, Greeting, DID, ButtonsContainer,
} from './Style/index'
import useSessionType from '../hooks/permissions/useSessionType'
import UserIcon from '../CommonComponents/UserIcon/Index'
import useOpenOnClick from './hooks/useOpenOnClick'
import useLogout from './hooks/useLogout'
import useGoToDash from './hooks/useGoToDash'
import useCloseOnClick from './hooks/useCloseOnClick'
import { longUsernameDisplay } from '../../generic/string/longUsernameDisplay'
import useGetCurrentUser from '../App/hooks/useGetCurrentUser'

export const NavDropdownToggle = ({ children }) => {
  const [open, setOpen] = useState(false)
  const openOnClick = useOpenOnClick(setOpen)

  return (
    <NavItem>
      <IconNavButton onClick={openOnClick}>
        <UserIconSvg />
      </IconNavButton>
      {React.cloneElement(children, { open, setOpen })}
    </NavItem>
  )
}

export const DropdownMenu = ({ open, setOpen }) => {
  const { currentUser } = useGetCurrentUser()

  const { pathname } = useLocation()
  const session = useSessionType()
  const [loggedInViaDIDOrCivic, setLoggedInViaDIDOrCivic] = useState(false)
  const deleteStore = useLogout(setOpen)
  const goToDashboard = useGoToDash(setOpen)

  const closeOnClick = useCloseOnClick(setOpen)

  useEffect(() => {
    const { signedInViaDID, signedInViaCivic } = session
    setLoggedInViaDIDOrCivic(signedInViaDID || signedInViaCivic)
  }, [session])

  const DropdownItem = ({
    children, leftIcon, rightIcon, onClick, to, state,
  }) => (
    <MenuItem to={to} onClick={onClick} state={state}>
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </MenuItem>
  )

  return (
    <DropdownMenuContainer open={open}>
      { loggedInViaDIDOrCivic && (
      <UserInfoSection>
        <UserIcon width="50px" userId={currentUser?.id} />
        <Greeting>
          Hello,
          {' '}
          {longUsernameDisplay(currentUser?.username) || 'Friend'}
          {' '}
        </Greeting>
        <DID>
          {currentUser?.id}
          {' '}
          <AuthenticationSvg />
        </DID>
        <ButtonsContainer>
          <button type="button" onClick={goToDashboard}>
            Manage Identity
          </button>
          <button type="button" onClick={deleteStore}>
            Logout
          </button>
        </ButtonsContainer>
      </UserInfoSection>
      )}
      <Menu>
        <SignedOut>
          {!loggedInViaDIDOrCivic && (
          <DropdownItem
            leftIcon={<LoginSvg />}
            to="/authenticate"
            state={{ redirectPath: pathname }}
            onClick={closeOnClick}
          >
            Sign In
          </DropdownItem>
          )}
        </SignedOut>
      </Menu>
    </DropdownMenuContainer>
  )
}
