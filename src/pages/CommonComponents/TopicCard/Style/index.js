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
  transition: all 1s;
  filter: ${(props) => (props.shouldBlur ? 'blur(25px)' : 'unset')};
  pointer-events: ${(props) => (props.shouldBlur ? 'none' : 'initial')};
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
  filter: ${(props) => (props.shouldBlur ? 'blur(25px)' : 'unset')};
  width: 100%;
  padding: 2vw 0;
  margin-bottom: 0;
  font-size: clamp(15px, 1.4vw, 22px);
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
  width: 100%;
  flex: 33%;
  margin: 2em 0;
  border-radius: .5em;
  box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  /* transition: all 1s ease-in-out; */

  :hover > div:first-child {
    filter: brightness(.95);
  }

  :hover p {
    filter: ${(props) => (props.shouldBlur ? 'blur(15px)' : 'brightness(.95)')};
  }

  @media only screen and (max-width: 800px) {
    width: 70vw;
    border-radius: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
    margin: 4vw auto;
  }

`

export const Thumb = styled('img')` 
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%; 
`

export const VideoDescriptionContainer = styled('li')` 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props) => (`${props.height}px`)};
  /* width: 45vw;   */
  margin: 0 2em;
  border-bottom-left-radius: .5em;
  border-bottom-right-radius: .5em;
  box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;
  border: none;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  /* transition: all 1s ease-in-out; */

  :hover > div:first-child {
    filter: brightness(.95);
  }

  :hover p {
    filter: ${(props) => (props.shouldBlur ? 'blur(15px)' : 'brightness(.95)')};
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
`

export const BlurOverlay = styled('div')`
  width: 100% ;
  height: 100%;
  filter: ${(props) => (props.shouldBlue ? 'blur(15px)' : 'unset')};
`

export const Warning = styled('span')`
  display: flex;
  flex-direction: column;
  svg {
    margin-right: .5vw;
  }

`

export const MessageContainer = styled('div')` 
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--m-menu-item-hover);
  width: 90%;
  border-radius: .5em;
  padding: 20px;
  cursor: pointer;
  height: 200px;

`

export const Message = styled('h3')`
 

  font-weight: bold;

  :hover {
    filter: brightness(.95)
  }
 
`
