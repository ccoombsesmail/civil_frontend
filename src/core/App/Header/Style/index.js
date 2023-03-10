/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const StyledHeader = styled('header')`
  width: 100%;
  height: var(--nav-size);
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  background-color: transparent;
  border-bottom: 1px solid lightgrey;
  background-color: white;

  
`
export const CivilIcon = styled('img')`
    height: 3.5vw;
    border-radius: 50%;
  @media only screen and (max-width: 600px) {
    height: 8vw;  
  }
  
`

export const ButtonsContainer = styled('div')`
  margin-left: 2vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* width: 25vw; */
  flex: 25%;

  font-size: clamp(20px, 1.2vw, 25px);
  @media only screen and (max-width: 600px) {
    flex: 11%;
  }
`

export const ProfileIcon = styled('img')`
  --button-size: calc(var(--nav-size) * 1);
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  cursor: pointer; 
`

export const NavContainer = styled('nav')`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  margin-right: 30px;
  flex: 25%;

  .cl-internal-7yhhw1 {
    width: 35px !important;
    height: 35px !important;
    img {
      border-radius: 50%;
    } 
  }
  button {
    margin: 0 10px;
  }

  @media (max-width: 1250px) {
    display: none;
  }

`

export const Divider = styled('div')`
  border-left: 1px solid lightgray;
  height: 40px;
  margin: 0 20px 0 10px;
`

export const MobileContainer = styled('div')`
  display: none;
  flex: 10%;

  @media (max-width: 1250px) {
      display: block;
    }
  iframe {
    min-height: 640px;
  }
`

export const WalletPassesContainer = styled('div')`
  display: flex;
  margin-right: 50px;
  align-items: center;
  position: relative;
  
`
