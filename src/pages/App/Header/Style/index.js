/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'

export const StyledHeader = styled('header')`
  width: 100%;
  height: 8vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 5px 5px 15px 5px #000000;
`

export const ButtonsContainer = styled('div')`
  margin-left: 2vw;
  display: flex;
  width: 15vw;
`

export const ProfileIcon = styled('img')`
  position: absolute;
  right: 1em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  cursor: pointer;
` 
