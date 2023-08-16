import styled from 'styled-components'

export const Container = styled('div')`
  min-width: 70%;
  width: 100%;

`

export const LinkWrapper = styled('a')`
  text-decoration: none;
  width: 100%;

`

export const FlexDiv = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: .5vw auto;
  box-shadow: 5px 5px 5px -3px #aaaaaa;
  border-radius: 1vw;
  border: 1px solid rgb(207, 217, 222);
  aspect-ratio: 9 / 9;
  max-height: 500px;
  transition: all 1s;

  :hover {
    opacity: .8;
    transform: scale(1.01);
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
export const OGImage = styled('img')` 
  border-radius: 1vw;
  object-fit: cover;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 50%;
  width: 100% !important;
  transform: translate(-50%);
  height: 100%;



`

export const OGUrl = styled('span')`
  z-index: 999999;
  color: gray;
  font-size: 1vw;
  white-space: pre-wrap;  
  word-wrap: break-word;
  hyphens: auto;
  max-width: 90%;
  @media only screen and (max-width: 600px) {
    font-size: 3vw;
  }
`

export const OGTitle = styled('h3')`
  z-index: 999999;
 font-size: 1vw;
 margin: .6vw 0 .1vw 0;
 color: gray;
 font-weight: bold;
 @media only screen and (max-width: 600px) {
    font-size: 3vw;
  }
`

export const OGDescription = styled('p')` 
  color: gray;
  font-size: .8vw;
  max-height: 35vh;
  overflow-y: scroll;
  @media only screen and (max-width: 600px) {
    font-size: 3vw;
  }
 
`
