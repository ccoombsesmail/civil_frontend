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
  /* box-shadow: 5px 5px 15px 5px #000000; */

  border-bottom: 1px solid lightgrey;
  border-bottom: 1px solid black;

  
`
export const CivilIcon = styled('img')`
    width: 3vw;
    height: 3vw;
  @media only screen and (max-width: 600px) {
    width: 8vw;
    height: 8vw;  
  }
  
`

export const ButtonsContainer = styled('div')`
  margin-left: 2vw;
  display: flex;
  width: 25vw;
  font-size: 1.2vw;
  @media only screen and (max-width: 600px) {
    font-size: 3.5vw;
  }
`

export const ProfileIcon = styled('img')`
  --button-size: calc(var(--nav-size) * 1);
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  cursor: pointer; 
`
