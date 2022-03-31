import styled from 'styled-components'

export const SignInContainer = styled('div')`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%);
  button {
    /* font-size: 1vw !important; */
  }
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
export const DIDSignInContainer = styled('div')` 
  margin-top: 5vh !important;
`
export const CreateDidButton = styled('button')`
  width: 100%;
  color: white;
  background-color: #8530F1;
  height: 4vh;
  /* font-size: 1vw; */
  outline: none;
  border: none;
  font-weight: bold;
  border-radius: 0.5em;
`
