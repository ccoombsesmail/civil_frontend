import styled, { keyframes, css } from 'styled-components'

//  https://codepen.io/avstorm/pen/vYYBxRM

const check = keyframes`
 50% {
    transform: scale(1.2); 
  } 
`

export const Label = styled('label')`
  flex: 20%;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  span:first-child {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #b9b8c3;
    transition: all 0.2s ease;
  }
  span:first-child svg {
    position: absolute;
    z-index: 1;
    top: 8px;
    left: 6px;
    fill: none;
    stroke: white;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--m-primary-btn-color);
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
    transition-delay: 0.2s;

    span:last-child {
      margin-left: 8px;
    }
    span:last-child:after {
      content: "";
      position: absolute;
      top: 8px;
      left: 0;
      height: 1px;
      width: 100%;
      background: #b9b8c3;
      transform-origin: 0 0;
      transform: scaleX(0);
    }
    :hover span:first-child {
      border-color: var(--m-primary-btn-color);
    }
  }
`

export const Input = styled('input')`
  display: none;
  :checked + ${Label} span:first-child {
    border-color: var(--m-primary-btn-color);
    background: var(--m-primary-btn-color);
    animation: ${check} 0.6s ease;
  }
  ${(props) => props.showCheckmark && css`
    :checked + ${Label} span:first-child svg {
      stroke-dashoffset: 0;
  } 
  `};

  :checked + ${Label} span:first-child:before {
    transform: scale(2.2);
    opacity: 0;
    transition: all 0.6s ease;
  }

  :checked + ${Label} span:last-child {
    color: #b9b8c3;
    transition: all 0.3s ease;
  }
  :checked + ${Label} span:last-child:after {
    transform: scaleX(1);
    transition: all 0.3s ease;
  }
`
