import styled, { keyframes } from 'styled-components'

const load = (ratio) => keyframes`
  0% { max-width: 0; }
  100% { max-width: ${ratio * 100}%; }
`

export const ProgressBarContainer = styled('div')` 
  background: white;
  border: 1px solid black;
  justify-content: flex-start;
  border-radius: 1em;
  align-items: center;
  position: relative;
  /* padding: 0 .2em; */
  display: flex;
  height: 2vh;
  width: 10vw;

`

export const ProgressValue = styled('div')` 
  animation: ${(props) => load(props.ratio)} 1s ease-out normal forwards;
  animation-delay: 1.5s;
  border-radius: 1em;
  background: #47DDA6;
  height: 1.8vh;
  width: 10vw;
  max-width: 0;
`
