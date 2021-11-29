/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components'

// const primary = '#4d271a88'

const splash = (primary) => keyframes`
  40% {
    background: ${primary};
    box-shadow: 0 -18px 0 -8px ${primary}, 16px -8px 0 -8px ${primary}, 16px 8px 0 -8px ${primary}, 0 18px 0 -8px ${primary}, -16px 8px 0 -8px ${primary}, -16px -8px 0 -8px ${primary};
  }

  100% {
    background: ${primary};
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
  

`

export const Container = styled('div')`
  position: relative;
  width: 24px;
  height: 24px;
  color: ${(props) => props.color};
  /* transform: scale(3); */
  span {
    margin-left: .5vw;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: 2px solid #bfbfc0;
    border-radius: 50%;
    z-index: 9999999999;

  }

  label {
    z-index: 999999999;
    width: 24px;
    height: 24px;
    background: none;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-filter: url(#goo);
    filter: url(#goo);
    transform: translate3d(0,0,0);
    /* pointer-events: none; */
  }

  svg {
    position: absolute;
    top: 5px;
    left: 4px;
    z-index: 99999999999;
    pointer-events: none;
    path {
      stroke: white;
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 19;
      stroke-dashoffset: 19;
      transition: stroke-dashoffset .3s ease;
      transition-delay: .2s;
    }
  }

  input:checked {
    border: none;
  }
  input:checked + label {
      animation: ${(props) => splash(props.color)} .6s ease forwards;
      border: 2px solid ${(props) => props.color};

      + svg path {
        stroke-dashoffset: 0
      }
  }

`

export const Input = styled('input')`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    margin: 0;
    &:focus {
      outline: 0;
    }
`
