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
  box-shadow: 5px 5px 15px 5px #000000;
`

export const ButtonsContainer = styled('div')`
  margin-left: 2vw;
  display: flex;
  width: 15vw;
`

export const ProfileIcon = styled('img')`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  cursor: pointer; 
`
