import styled from 'styled-components'


export const Container = styled('div')`
  min-width: 70%;
`

export const LinkWrapper = styled('a')`
  text-decoration: none;

`

export const FlexDiv = styled('div')` 
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
`

export const OGTitle = styled('h3')`
 font-size: 1vw;
 margin: .6vw 0 .1vw 0;
 color: gray;
 font-weight: bold;
`

export const OGDescription = styled('p')` 
  color: gray;
  font-size: .8vw;
  max-height: 35vh;
  overflow-y: scroll;
 
`
