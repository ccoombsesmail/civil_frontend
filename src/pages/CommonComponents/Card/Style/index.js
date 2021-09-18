import styled, {css} from 'styled-components'

import { RiArrowDownFill } from 'react-icons/ri'



export const Header = styled('div')` 
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: .5em .5em;    
  background-color: white;
  height: 4vw;
  max-height: 4vw;
  transition: filter 1s ease-in-out;

  div {
    height: 100%;
    flex-grow: 1;
    display: flex;
    /* flex-direction: column; */
    /* justify-content: flex-end; */
    align-items: center;
    margin-left: 1em;
    background-color: white;
  }

  time {
      position: absolute;
      top: 1em;
      right: 1em;
      color: gray;
      /* margin-bottom: .2em; */
      font-size: .5em;
    }
  h3 {
    /* position: absolute;
    bottom: 0;
    left: 50%; */
    /* transform: translateX(-50%); */
    padding: .1em;
    font-size: .9em;
    margin: 0;
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    font-weight: bold;
    color: gray;

  }
  /* transition: .2s ease-in-out; */
`
export const Body = styled('div')` 
  width: 100%;
  background-color: white;
  transition: all 1s ease-in-out;
  .twitter-tweet {
    max-width: 90%;
    /* max-height: 15vw; */
  }
  /* .twitter-widget-3 {
   max-height: 23vw;
  } */
` 

export const Description = styled('p')` 
  width: 90%;
  /* height: 1.5vw; */
  padding: .5em .5em;
  margin: 0;
  font-size: .7em;
  border: .5px solid gray;
  border-style: dotted;
  border-radius: .4em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  color: black;
  font-weight: bold;
  transition: all 1s ease-in-out;
` 

export const ArrowContainer = styled('div')`
    background-color: white;
    display: flex;
    width: 100%;
    height: 1vw;
    padding-top: .4vw;
    justify-content: center;
    transition: filter 1s ease-in-out;
    svg {
      position: relative !important;
    }
`

export const Container = styled('li')` 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vw;
  width: 20vw;  
  margin: 2em;
  border-radius: .5em;
  box-shadow:  -5px -5px 10px #5a5a5a,
             5px 5px 10px #ffffff;
  border: none;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  border: 1px solid black;
  transition: all 1s ease-in-out;

  &:hover  {
    /* height: auto; */
    height: ${props => props.height};
  }

 &:hover ${Description} {
    transform: scale(1.2);
  }
  &:hover ${Header} {
    filter: brightness(.8);
  }

   &:hover ${ArrowContainer} {
    filter: brightness(.8);
  }


 &:hover ${Body} {
    background-color: #CCCCCC;
  }
`







export const Thumb = styled('img')` 
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%; 
`
    



