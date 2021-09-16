/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Button = styled('button')`
  position: relative;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: inherit;
  display: block;
  border-radius: 0.5rem;;
  margin: ${props => props.small ? '0' : '0em 1em'};
  &:hover, &:focus, &:active {
     letter-spacing: ${props => props.small ? 'normal' : '0.125rem'};
    }
  height: ${props => props.small ? '2em' : '2.5em'};
  font-size: ${props => props.small ? '.7em' : '.9em'};
  display: flex;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.65,-0.25,0.25,1.95);
  font-weight: 900;
  color: white;
  padding: ${props => props.small ? '.3em .8em' : '.5em 1em'};
  background: var(--m-trim-color);
  text-transform: uppercase;
  /* box-shadow:  5px 5px 10px #5a5a5a,
             -5px -5px 10px #ffffff;  */
  :hover {
    filter: brightness(.8);
    /* box-shadow: 2px 2px 5px 5px #000000; */

  }
`
