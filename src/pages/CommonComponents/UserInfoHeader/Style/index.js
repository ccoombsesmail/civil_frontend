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
  /* transition: filter 1s ease-in-out; */

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

  h2 {
    line-height: unset;
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    font-weight: bold;
    font-size: 1vw;
    @media only screen and (max-width: 800px) {
      font-size: 3.4vw;
    }
  }
  h3 {

    font-size: .8vw;
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    font-weight: bold;
    color: gray;
    @media only screen and (max-width: 800px) {
      font-size: 3vw;
    }
  }
`

export const Thumb = styled('img')` 
  flex-shrink: 0;
  width: 3vw;
  height: 3vw;      
  border-radius: 50%; 

  @media only screen and (max-width: 800px) {
     width: 9vw;
     height: 9vw;  
  }
`

export const UsernameContainer = styled('section')`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

`
