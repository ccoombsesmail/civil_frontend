import styled from 'styled-components'

export const HoverLink = styled('a')` 
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  @media only screen and (max-width: 800px) {
      font-size: 2vw;
    }

  span {
    font-weight: bold;
    margin-left: 5px;
  }
  color: black;
  
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    margin: -1px 0;
    color: blue;
    background-color: black;
    /* visibility: hidden; */
    transform: scaleX(0);
    transition: all 0.4s ease-in-out 0s;
    :hover {
      visibility: visible;
      transform: scaleX(1);
    }
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

`
