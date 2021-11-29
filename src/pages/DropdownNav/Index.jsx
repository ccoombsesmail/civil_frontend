import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
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
      {React.cloneElement(children, { open })}
    </NavItem>
  )
}

export const DropdownMenu = ({ open, logout }) => {
  const goToDashboard = useGoToDashboard()
  const { pathname } = useLocation()

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
            <UserButton />
            {/* <DropdownItem
              leftIcon={<RiUser3Fill />}
              to="/dashboard"
              onClick={goToDashboard}
            >
              My Profile
            </DropdownItem>
            <DropdownItem
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
