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
export const Body = styled('div')` 
  width: 100%;
  background-color: white;
  transition: all 1s ease-in-out;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .twitter-tweet {
    max-width: 90%;
  }

`

export const Description = styled('p')` 
  width: 90%;
  padding: .5em 0;
  margin: 1em 0;
  font-size: 1.2vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  color: black;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 5vw;

  }
  
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
  height: ${(props) => (`${props.height}px`)};
  width: 40vw;  
  margin: 2em 2em 2em 2em;
  border-radius: .5em;
  box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;
  border: none;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  transition: all 1s ease-in-out;

  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
 
`

export const Thumb = styled('img')` 
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%; 
`
