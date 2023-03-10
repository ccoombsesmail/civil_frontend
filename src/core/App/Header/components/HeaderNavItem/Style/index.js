/* eslint-disable no-unused-vars */
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

const rubberBand = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
            transform: scale3d(.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
            transform: scale3d(1.05, .95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`

export const ItemButton = styled('button')` 
  position: relative;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  color: black;
  :hover {
    background-color: var(--m-btn-hover-color);
  }

  :hover > div > mark {
    animation-name: ${rubberBand};
  }

`

export const NotificationMark = styled('mark')` 
  position: absolute;
  top: -3px;
  left: -3px;
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  height: 22px;
  width: 22px;
  background: red;
  background-image: ${(props) => (props.tribunal ? 'radial-gradient(100% 100% at 100% 0,#5adaff 0,#5468ff 100%);' : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: clamp(10px, .67vw, 20px);
  transform-origin: center bottom;
  animation-duration: 1s;
  animation-fill-mode: both;   
  animation-iteration-count: 1;  
  
`

export const IconContainer = styled('div')` 
  display: flex;
  position: relative;
`

export const InnerContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
