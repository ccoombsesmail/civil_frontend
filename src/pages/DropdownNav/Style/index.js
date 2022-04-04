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
  top: 50px;
  width: 380px;
  font-family: var(--clerk-font-family);
  transform: translateX(-45%);
  background-color: var(--bg);
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border-radius: var(--border-radius);
  padding: 3rem 0;
  transition: all var(--speed) ease;
  z-index: 99999;
  /* opacity: ${({ state }) => (state === 'entered' ? 1 : 0)}; */
  display: ${({ open }) => (open ? 'block' : 'none')};
  opacity: ${({ open }) => (open ? 1 : 0)};

  a {
    padding-left: 1vw;
    color: black;
    text-decoration: none;;
  }

`

export const Menu = styled('div')` 
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99999;
  color: black;
  a:hover { 
    background-color: var(--m-menu-item-hover);

  }
`

export const MenuItem = styled(Link)`
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  color: black;
  padding: 0.5rem;
  cursor: pointer;
  .icon-button {
    margin-right: 1vw;
  }

  .icon-button:hover {
    filter: none;

  }

 

  .icon-right {
    margin-left: auto;
  }

`

export const UserInfoSection = styled('div')` 
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export const Greeting = styled('h2')`
  color: var(--clerk-font-color);
  font-size: 1vw;
  margin-top: .5vw;

`

export const DID = styled('h3')`
  color: var(--clerk-font-color-l1);
  font-size: .6vw;

`

export const ButtonsContainer = styled('div')` 
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 1.2vw;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    color: var(--clerk-font-color-l1, #808080);
    border: 0.125rem solid #f2f2f2;
    border-radius: .5em;
    max-height: 2.625rem;
    padding: 0.75rem 1.5rem;
    font-size: .55vw;
    background: none;
    transition: all .5s;
    filter: none !important;
    :hover {
      background-color: #f5f5f5;
    }
  }

`
