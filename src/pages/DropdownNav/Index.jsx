/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import {
  SignedOut,
  UserButton,
} from '@clerk/clerk-react'
import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai'
import { RiUser3Fill } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'
import useGoToDashboard from '../hooks/useGoToDashboard'

import {
  NavItem, IconNavButton, DropdownMenuContainer, Menu, MenuItem,
} from './Style/index'

export const NavDropdownToggle = ({ icon, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <NavItem>
      <IconNavButton onClick={() => setOpen(!open)}>
        {icon}
      </IconNavButton>
      {React.cloneElement(children, { open, setOpen })}
    </NavItem>
  )
}

export const DropdownMenu = ({ open, setOpen }) => {
  const goToDashboard = useGoToDashboard()
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
            <DropdownItem
              onClick={onUserBtnClick}
              leftIcon={<UserButton userProfileUrl="/dashboard" />}
              to={pathname}
            >
              User Management
            </DropdownItem>
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
                leftIcon={<AiOutlineLogin />}
                to="/signin"
                state={{ redirectPath: pathname }}
              >
                Sign In
              </DropdownItem>
            </SignedOut>

          </Menu>
        </DropdownMenuContainer>
      )}
    </Transition>

  )
}
