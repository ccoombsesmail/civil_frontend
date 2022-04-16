import styled from 'styled-components'

export const OuterContainer = styled('div')`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 40vw;
  transform: translate(-50%);
  @media only screen and (max-width: 600px) {
      width: 100vw;
    }
  button {
    /* font-size: 1vw !important; */
  }
`

export const ButtonContainer = styled('div')` 
  display: flex;
  justify-content: space-between;
`
