import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import { AiOutlineLogout } from 'react-icons/ai'
import { RiUser3Fill } from 'react-icons/ri'
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

  const DropdownItem = ({
    children, leftIcon, rightIcon, onClick, to,
  }) => (
    <MenuItem to={to} onClick={onClick}>
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
            </DropdownItem>

          </Menu>
        </DropdownMenuContainer>
      )}
    </Transition>

  )
}
