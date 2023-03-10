import styled from 'styled-components'

export const StyledButton = styled('button')` 
  cursor: pointer;
  border: none;
  outline: none;
  /* font-weight: bold; */
  letter-spacing: .2em;
  display: flex;
  align-items: center;
  font-family: inherit;
  background: transparent;
   :hover {
    filter: drop-shadow(0 2px 4px black) brightness(.8);
  }
  :disabled {
    filter: none;
    opacity: .3;
  }

  @media screen and (max-width: 600px) {
    span {
      display: ${(props) => (props.hideTextMobile ? 'none' : 'block')};
    }
  }
`
