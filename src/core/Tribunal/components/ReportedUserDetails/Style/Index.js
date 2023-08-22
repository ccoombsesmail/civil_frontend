/* eslint-disable import/no-unused-modules */
/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export const UserDetailsContainer = styled('section')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border: 1px solid rgba(200, 200, 200, 0.25);
  margin: 20px 0;
  width: 95%;
  background-color: var(--m-menu-item-hover);
  border-radius: 0.5em;

  header {
    border-top-right-radius: 0.5em;
    border-top-left-radius: 0.5em;
  }
  
  ul {
    :last-child {
      border-bottom-right-radius: 0.5em;
      border-bottom-left-radius: 0.5em;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  svg {
    @media only screen and (max-width: 800px) {
      width: 9vw;
      height: 9vw;
    }
  }
`

export const UserDetailsRow = styled('ul')`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: white;
  color: black;
  padding: 1em 0;
`

export const UserDetailsRowItem = styled('li')`
  font-weight: bold;
  flex-direction: column;
  display:flex;
  justify-content: center;
  align-items: center;

`
