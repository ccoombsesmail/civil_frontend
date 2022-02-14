import styled from 'styled-components'

export const ButtonText = styled('span')`
  transform: translateX(35px);
  color: white;
  font-weight: bold;
`

export const IconContainer = styled('span')`
  position: absolute;
  top: 50%;
  border-left: 1px solid white;
  transform: translate(110px, -50%);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledButton = styled('button')`
  position: relative; 
  width: 150px;
  height: 50px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
  background: var(--m-primary-background-2-color);
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  span {
    transition: 200ms;
  }

  svg {
    width: 30px;
    fill: white;
  }

  :hover {
    background: var(--m-primary-background-2-color);
    filter: brightness(.9)
  }

  :hover {
    ${ButtonText} {
      color: transparent;
      display: none;
    }

  }

  :hover {
    ${IconContainer} {
    width: 150px;
    border-left: none;
    transform: translate(0, -50%);
    }
  }

  :focus {
    outline: none;
  }
`
