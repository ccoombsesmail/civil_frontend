/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components'

const float = keyframes` 
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
`

const float2 = keyframes` 
    0% {
      line-height: 30px;
      transform: translatey(0px);
    }
    55% {
      transform: translatey(-20px);
    }
    60% {
      line-height: 10px;
    }
    100% {
      line-height: 30px;
      transform: translatey(0px);
    }
`

export const FloatingQuoteBox = styled('p')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 40vw;
  word-wrap: break-word;
  transform: translatey(0px);
  animation: ${float} 5s ease-in-out infinite;
  /* mix-blend-mode: multiply; */
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 1em;
  color: #774f38;
  background-color: #ece5ce;
  padding: 2em;
  border-radius: 11px;
  position: relative;
  box-shadow: 20px 20px #83af9b;
  font-family: "Baloo 2", cursive;
  margin-bottom: 4em;
  b {
    color: var(--m-primary-color)
  }

  :after {
    transform: translatey(0px);
    animation: ${float2} 5s ease-in-out infinite;
    content: ".";
    font-weight: bold;
    // -webkit-text-stroke: 0.5px $color-green;
    -webkit-text-fill-color: #ece5ce;
    // border: 1px solid $color-green;
    text-shadow: 22px 22px #83af9b;
    text-align: left;
    font-size: 55px;
    width: 55px;
    height: 11px;
    line-height: 30px;
    border-radius: 11px;
    background-color: #ece5ce;
    position: absolute;
    display: block;
    bottom: -30px;
    left: 0;
    box-shadow: 22px 22px #83af9b;
    z-index: -2;
}
`

export const TextContainer = styled('div')`
  margin-bottom: 1em;
`
