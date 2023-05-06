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
  max-height: 500px;
  overflow: scroll; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: .5vw auto;
  width: 85%;
  box-shadow: 5px 5px 5px -3px #aaaaaa;
  border-radius: 1vw;
  border: 1px solid rgb(207, 217, 222);
  padding: 1em;
  :hover {
    opacity: .8;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
export const OGImage = styled('img')` 
  border-radius: 1vw;

`

export const OGUrl = styled('span')` 
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
