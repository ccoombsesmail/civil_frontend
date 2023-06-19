import styled from 'styled-components'

export const SpacesHeader = styled('p')` 
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  border-radius: 1em;
  font-weight: bold;
  text-transform: capitalize;
  border: 1px solid black;
  box-shadow:  5px 5px 4px #5a5a5a,
             -5px -5px 4px #ffffff;
  b {
    color: var(--m-primary-color)
  }
`

export const CardContainer = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  padding: 0;
  margin: 0em auto 0 auto;
  background-color: #F0F2F5;
  background-color: white;
  width: 100%;

  @media only screen and (max-width: 800px) {
     width: 100%;
  }

`
