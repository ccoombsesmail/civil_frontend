import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const NavItem = styled('li')`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconNavButton = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  :hover {
    filter: brightness(.9);
  }

`

export const DropdownMenuContainer = styled('div')` 
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  transition: all var(--speed) ease;
  z-index: 99999;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  display: ${({ state }) => (state === 'entered' ? 'block' : 'none')};
  a {
    color: var(--text-color);
    text-decoration: none;;
  }

`

export const Menu = styled('div')` 
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99999;
  a:hover { 
    background-color: #525357;

  }
`

export const MenuItem = styled(Link)`
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  cursor: pointer;
  .icon-button {
    margin-right: 0.5rem;
  }

  .icon-button:hover {
    filter: none;

  }

 

  .icon-right {
    margin-left: auto;
  }

`
