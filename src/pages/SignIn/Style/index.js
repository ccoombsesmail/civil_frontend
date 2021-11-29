import styled from 'styled-components'

export const SignInContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const IconNavButton = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  :hover {
    filter: brightness(.9);
  }

`
