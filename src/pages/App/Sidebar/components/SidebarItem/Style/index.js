import styled, { keyframes } from 'styled-components'

const tada = keyframes`

  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }


`

export const ItemButton = styled('button')` 
  position: relative;
  width: 90%;
  margin: 0;
  border-radius: var(--border-radius);
  /* padding: 5%; */
  display: flex;
  justify-content: ${(props) => (props.isOpen ? 'flex-start' : 'center')};
  align-items: center;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  color: black;
  font-weight: bold;
  
  :hover {
    background-color: var(--m-btn-hover-color);
  }

  :hover > div > mark {
    animation-name: tada;
  }

`

export const NotificationMark = styled('mark')` 
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: .7vw;
  transform-origin: center bottom;
  animation-duration: 1s;
  animation-fill-mode: both;   
  animation-iteration-count: 1;  
`

export const IconContainer = styled('div')` 
  display: flex;
  position: relative;
`
