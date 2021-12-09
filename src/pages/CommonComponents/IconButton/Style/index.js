import styled from 'styled-components'

export const StyledButton = styled('button')` 
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  /* font-size: 1.7em; */
  background: transparent;
   :hover {
    filter: drop-shadow(0 2px 4px black) brightness(.8);
  }
`
