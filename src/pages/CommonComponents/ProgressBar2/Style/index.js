import styled, { keyframes } from 'styled-components'

const load = (ratio) => keyframes`
  0% { stroke-dashoffset: (440 - (440 * 1) / 100); }
  100% { stroke-dashoffset: (440 - (440 * ${ratio}) / 100); }
`

export const ProgressBarContainer = styled('div')` 
  background:#fff;
  width: clamp(400px, 20vw, 800px);
  height: clamp(400px, 20vw, 800px);
  transform: scale(.9);
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  flex-direction:column;
  border-radius: .4vw;
  transition: transform .5s;
  > h2, h1 {
    margin: 1vw 0;
  }
  :hover {
    transform: translateY(-10px);
    box-shadow:0 15px 35px rgba(0,0,0,.5);
  }

`

export const InnerProgressContainer = styled('div')`
    --m-circle-width: clamp(70px, 150px, 90vw);
    --m-circle-height: clamp(70px, 150px, 90vw);

    width: var(--m-circle-width);
    height: var(--m-circle-height);
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width:var(--m-circle-width);
      height:var(--m-circle-height);
      position:relative;
      circle {
        width:var(--m-circle-width);
        height:var(--m-circle-height);
        fill:none;
        stroke-width:10;
        stroke:#000;
        transform:translate(5px,5px);
        stroke-dasharray:440;
        stroke-dashoffset:440;
        stroke-linecap:round;
        /* animation: ${(props) => load(props.ratio)} 1s ease-out normal; */

        :nth-child(1){
          stroke-dashoffset:0;
          stroke:#f3f3f3;
        }
        :nth-child(2) {

          stroke-dashoffset: ${(props) => `calc(440 - (440 * ${props.ratio}) / 100)`};
          stroke: #03a9f4;
        }
      }
    }
`

export const MiddleOfCircleContainer = styled('div')` 
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    color:#111;
    h2 {
      font-size: clamp(20px, 1.8vw, 30px);
    span{
      font-size: clamp(20px, 1.8vw, 30px);
    }
  }
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
