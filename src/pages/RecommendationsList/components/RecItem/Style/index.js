import styled from 'styled-components'

export const Container = styled('li')`
  width: 95%;
  height: 17vh;
  display: flex;
  margin: 10px;
  cursor: pointer;
  
`

export const Thumb = styled('div')`
  height: 100%;
  flex: 40%;
  background: white;
  margin-right: 8px;
  aspect-ratio: 12 / 9;
  img {
    height: 100%;
  }
`

export const DescriptionContainer = styled('div')`
  height: 100%;
  display: flex;
  flex: 60%;
  flex-direction: column;
  align-items: center;

`

export const Title = styled('h2')`
  width: 100%;
  display: flex;
  font-size: 1vw;
  font-weight: bold;


`

export const SubTitle = styled('h3')`
  width: 100%;
  color: gray;
  font-size: .6vw;
`

export const OGImage = styled('img')` 
  border-radius: 1vw;

`

export const OGUrl = styled('span')` 
  color: gray;
  font-size: 1vw;
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
