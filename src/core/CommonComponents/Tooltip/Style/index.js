/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const LightButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  width: 25px;
  height: 25px;
  padding: 3px;
  transition: all .4s;
  :hover {
    background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
    /* filter: brightness(.9); */
    transform: ${(props) => (props.grow === 'true' ? 'scale(1.25)' : 'scale(1)')};
    
  }
`

export const TooltipContent = styled('div')`
  font-size: .6vw;

  @media only screen and (max-width: 600px) {
    font-size: 3vw;
  }
  
`
