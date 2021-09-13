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
  margin: 0 1em;
  &:hover, &:focus, &:active {
      letter-spacing: 0.125rem;
    }
  height: 6vh;
  transition: all 0.5s cubic-bezier(0.65,-0.25,0.25,1.95);
  font-weight: 900;
  color: white;
  padding: 1.25rem 2rem;
  background: var(--m-trim-color);
  text-transform: uppercase;
  box-shadow:  5px 5px 10px #5a5a5a,
             -5px -5px 10px #ffffff; 
  :hover {
    filter: drop-shadow(0 2px 4px black) brightness(.8);
    /* box-shadow: 2px 2px 5px 5px #000000; */

  }
`
