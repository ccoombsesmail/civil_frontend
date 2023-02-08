import styled, { keyframes } from 'styled-components'

const dotOvertaking = keyframes`

  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
`

export const Backdrop = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999999;
  background-color: rgba(0, 0, 0, .6);
  opacity: .99;
`

export const InnerContainer = styled('div')` 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: scale(2);

.dot-overtaking {
  transform: scale(2);
  position: relative;
  z-index: 9999999999;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: transparent;
  color: #fff;
  margin: -1px 0;
  box-shadow: 0 -20px 0 0;
  animation: ${dotOvertaking} 2s infinite cubic-bezier(.2, .6, .8, .2);

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;

    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: transparent;
    color: #fff;
    box-shadow: 0 -20px 0 0;
  }

  &::before {
    animation: ${dotOvertaking} 2s infinite cubic-bezier(.2, .6, .8, .2);
    animation-delay: .3s;
  }

  &::after {
    animation: ${dotOvertaking} 1.5s infinite cubic-bezier(.2, .6, .8, .2);
    animation-delay: .6s;
  }
}




`
