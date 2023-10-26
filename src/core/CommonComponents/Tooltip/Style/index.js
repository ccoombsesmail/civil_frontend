/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Button } from 'primereact/button'

export const LightButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  /* width: 25px;
  height: 25px; */
  padding: 3px;
  transition: all .4s;
  :hover {
    background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
    /* filter: brightness(.9); */
    transform: ${(props) => (props.grow === 'true' ? 'scale(1.25)' : 'scale(1)')};
    
  }

  path {
    color: white !important;
    fill: white !important;
  }
`

export const TooltipHeader = styled('div')`
    border: 1px solid rgba(200,200,200,0.25);
    min-width: 15vw;
    background-color: white;
    box-shadow: 0 15px 10px 0 rgb(81 82 81 / 32%);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    font-size: clamp(10px, 1vw, 20px);
    padding: .8vw 1.8vw;
    font-weight: bold;
    width: clamp(160px, 18vw, 340px);
    color: var(--primary-color);
`

export const TooltipContent = styled('div')`
    border: 1px solid rgba(200,200,200,0.25);
    min-width: 15vw;
    background-color: white;
    box-shadow: 0 15px 10px 0 rgb(81 82 81 / 32%);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    font-size: clamp(10px, 0.8vw, 20px);
    padding: .8vw 1.8vw;
    font-weight: bold;
    width: clamp(160px, 18vw, 340px);
    color: black;

`
