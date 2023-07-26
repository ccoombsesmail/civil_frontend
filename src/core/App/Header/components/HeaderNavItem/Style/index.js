/* eslint-disable no-unused-vars */
import styled, { keyframes } from 'styled-components'

export const ItemButton = styled('button')` 
  position: relative;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  color: black;
  :hover {
    background-color: var(--m-btn-hover-color);
  }

`

export const IconContainer = styled('div')` 
  display: flex;
  position: relative;
`
