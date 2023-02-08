import styled from 'styled-components'

export const OuterContainer = styled('div')`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 50vw;
  transform: translate(-50%);
  @media only screen and (max-width: 700px) {
      width: 100vw;
    }

`

export const ButtonContainer = styled('div')` 
  display: flex;
  justify-content: space-between;
  margin-top: 2vw;
`
