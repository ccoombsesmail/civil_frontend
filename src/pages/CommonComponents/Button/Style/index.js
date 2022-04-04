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
  height: ${(props) => (props.small ? '2em' : '2.5em')};
  font-size: ${(props) => (props.small ? '.7em' : '.9em')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.65,-0.25,0.25,1.95);
  font-weight: 900;
  color: white;
  padding: ${(props) => (props.small ? '.3em .8em' : '.5em 1em')};
  /* background: var(--m-primary-background-2-color); */
  background-color: var(--m-primary-btn-color);
  text-transform: uppercase;
  width: ${(props) => (props.width || 'unset')};;
  :hover {
    filter: brightness(.8);
  }
`
