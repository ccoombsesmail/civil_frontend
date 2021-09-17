import styled, {css} from 'styled-components'

import { FiArrowDownCircle } from 'react-icons/fi'



export const Header = styled('div')` 
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 .5em;    
  background-color: white;
  height: 4vw;

  div {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 1em;
    background-color: white;
  }

  time {
      color: gray;
      margin-bottom: .2em;
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
    height: ${props => props.height}
  }



`



export const Body = styled('div')` 
  width: 100%;
  .twitter-tweet {
    max-width: 90%;
    /* max-height: 15vw; */
  }
  /* .twitter-widget-3 {
   max-height: 23vw;
  } */
` 

export const Description = styled('p')` 
  width: 100%;
  height: 1.5vw;
  padding: 0 .5em;
  font-size: .7em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* background-color: var(--m-primary-background-color); */
  color: black;
  font-weight: bold;
` 

export const Thumb = styled('img')` 
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%; 
`
    

export const DownArrow = styled(FiArrowDownCircle)`
  position: absolute;  
  height: 1vw;
  width: 1vw;
  bottom: 0;
  left: 50% !important;
  transform: translate(-50%, 90%);
`

