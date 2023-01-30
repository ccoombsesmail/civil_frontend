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
  justify-content: center;
  h1 {
    text-align: center;
    vertical-align: center;
  }
  margin-bottom: 2vw;


`

export const UserIcon = styled('img')`  
  margin-right: 1vw;
  height: clamp(60px, 4vw, 70px);
  width: clamp(60px, 4vw, 70px);
  border-radius: 50%;
  cursor: pointer;
  :hover {
    filter: brightness(.8);
  }

`

export const UserIconEditContainer = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  margin: 2vw;
  svg {
    :hover {
      filter: brightness(.8);
    }
    cursor: pointer;
  }

`
