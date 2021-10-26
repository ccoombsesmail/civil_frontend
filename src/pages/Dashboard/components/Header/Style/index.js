/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('header')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  h1 {
    color: var(--bg-accent);
    font-size: 1.4em;
    font-weight: bold;
  }
`

export const FlexDiv = styled('div')`
  display: flex;
  align-items: center;

`

export const UserIcon = styled('img')`  
  margin-right: 1vw;
  height: 2vw;
  width: 2vw;
  border-radius: 50%;

`
