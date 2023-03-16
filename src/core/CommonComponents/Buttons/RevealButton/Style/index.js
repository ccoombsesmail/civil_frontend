import styled from 'styled-components'
import { HoverLink } from '../../../HoverLink/Style'

export const LeftIcon = styled('div')`
  svg {
    height: 3vh;
  }
  border-radius: 10px;
  background-image: linear-gradient(to right,var(--m-primary-background-color),#83af9b);

`

export const RightIcon = styled('div')`
  border-radius: 10px;
  background-image: linear-gradient(to right,var(--m-primary-background-color),#83af9b);
 svg {
  height: 3vh;

 }

`

export const Block = styled('li')`
  position: absolute;
  border-radius: 10px;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(0);
    transition: transform 0.3s, filter 0.2s;
    transition-timing-function: ease-in-out;

    ${LeftIcon}, ${RightIcon} {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right,var(--m-primary-background-color),#83af9b);
      transition: 0.6s;
      svg {
        height: ${(props) => props.size || '35px'};
        width: ${(props) => props.size || '35px'};

      }
    }

    ${LeftIcon} {
      border: none;
      outline: none;
      clip-path: inset(0 50% 0 0);

    }

   ${RightIcon} {
      border: none;
      outline: none;
      clip-path: inset(0 0 0 50%);
    }

`

export const Container = styled('ul')`
  padding: 0;
  margin: 0;
  height: 6.5vh;
  width: 20vw;
  border-radius: 10px;
  list-style-type: none;
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: inset 0 -6px 10px -8px rgba(0, 0, 0, 0.3), inset 0 6px 10px -8px rgba(0, 0, 0, 0.3);

  cursor: pointer;
  @media only screen and (max-width: 800px) {
    height: 3vh;
    width: 30vw;
    svg {
      height: 2vh !important;
    }
    }
  :hover {
    ${Block} {
      filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));

    }
    ${LeftIcon} {
      transform: translateX(-50%) scale(1.2);

    }
    
    ${RightIcon} {
      transform: translateX(50%) scale(1.2);
    }
    ${HoverLink} {
        z-index: 9999999;
        color: black;
    }

  }


`
