import styled from 'styled-components'

export const Header = styled('div')` 
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: .5em .5em;    
  background-color: white;
  /* height: 4vw;
  max-height: 4vw; */
  transition: filter 1s ease-in-out;

  div {
    height: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-left: 1em;
    background-color: white;
  }

  time {
      position: absolute;
      top: 1em;
      right: 1em;
      color: gray;
      font-size: .5em;
    }
  h3 {

    padding: .1em;
    font-size: .9em;
    margin: 0;
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    font-weight: bold;
    color: gray;

  }
`

export const Thumb = styled('img')` 
  flex-shrink: 0;
  width: 3vw;
  height: 3vw;      
  border-radius: 50%; 

  @media only screen and (max-width: 600px) {
     width: 6vw;
     height: 6vw;  
  }
`
