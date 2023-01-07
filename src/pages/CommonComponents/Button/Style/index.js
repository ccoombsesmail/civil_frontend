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
  margin: 0em 1em;
  &:hover {
     letter-spacing: ${(props) => (props.small ? 'normal' : '0.125rem')};
    }
  height: ${(props) => (props.height || 'clamp(45px, 2.5vw, 70px)')};;
  font-size: clamp(12px, 1.4vw, 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.65,-0.25,0.25,1.95);
  font-weight: 900;
  color: white;
  padding: ${(props) => (props.small ? '.3em .8em' : '.5em 1em')};
  /* background: var(--m-primary-background-2-color); */
  background-color: ${(props) => (props.backgroundColor || 'var(--m-primary-btn-color)')};
  text-transform: uppercase;
  width: ${(props) => (props.width || 'unset')};;
  :hover {
    filter: brightness(.8);
  }

  @media only screen and (max-width: 600px) {
     font-size: 2.4vw;
  }
  
`
export const Button2 = styled('button')` 
  position: relative;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: inherit;
  display: block;
  border-radius: 0.5rem;;
  margin: 0em 1em;
  padding: .5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .75s ease-in-out;
  font-weight: 900;
  color: var(--m-primary-btn-color);
  background-color: white;
  text-transform: uppercase;
  border: 1px solid var(--m-primary-btn-color);

  &:hover {
    background-color: var(--m-primary-btn-color);
    color: white;
    filter: brightness(.8);
    /* border: 1px solid var(--m-primary-btn-color); */

  }

  svg {
    margin: .4em;
  }

`
