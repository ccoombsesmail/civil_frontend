/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import {
  SignedOut,
  SignedIn,
  UserButton,
} from '@clerk/clerk-react'

// import { AiOutlineLogin } from 'react-icons/ai'
// import { FaUserCircle } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { UserIconSvg, LoginSvg } from '../../svgs/svgs'
// import useGoToDashboard from '../hooks/useGoToDashboard'

import {
  NavItem, IconNavButton, DropdownMenuContainer, Menu, MenuItem,
} from './Style/index'

export const NavDropdownToggle = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <NavItem>
      <IconNavButton onClick={() => setOpen(!open)}>
        <UserIconSvg />
      </IconNavButton>
      {React.cloneElement(children, { open, setOpen })}
    </NavItem>
  )
}

export const DropdownMenu = ({ open, setOpen }) => {
  // const goToDashboard = useGoToDashboard()
  const { pathname } = useLocation()

  const onUserBtnClick = () => {
    const btns = document.getElementsByClassName('cl-accounts-manager-button')
    for (const btn of btns) {
      btn.addEventListener('click', () => setOpen(false))
    }
  }

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

    <Transition
      in={open}
      timeout={100}
    >
      {(state) => (
        <DropdownMenuContainer state={state}>
          <Menu>
            <SignedIn>
              <DropdownItem
                onClick={onUserBtnClick}
                leftIcon={<UserButton userProfileUrl="/dashboard" />}
                to={pathname}
              >
                User Management
              </DropdownItem>
            </SignedIn>
            {/* <DropdownItem
              leftIcon={<RiUser3Fill />}
              to="/dashboard"
              onClick={goToDashboard}
            >
              My Profile
            </DropdownItem> */}
            {/* <DropdownItem
              onClick={logout}
              leftIcon={<AiOutlineLogout />}
            >
              Logout
            </DropdownItem> */}
            <SignedOut>
              <DropdownItem
                leftIcon={<LoginSvg />}
                to="/signin"
                state={{ redirectPath: pathname }}
                onClick={() => setOpen(false)}
              >
                Sign In
              </DropdownItem>
              {/* </DropdownItem> */}
            </SignedOut>
          </Menu>
        </DropdownMenuContainer>
      )}
    </Transition>

  )
}
