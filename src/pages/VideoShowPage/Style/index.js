import styled from 'styled-components'

export const VideoPlayer = styled('iframe')`
  width: 100%;
  /* height: 45vw; */
  /* width: 45vw;   */
  height: 25.31vw;

  @media only screen and (max-width: 600px) {
    height: 50vw
  }

`

export const Description = styled('p')`
  width: 100%;
  font-size: .6em;
  word-wrap: break-word;
  padding: 1em;
`

export const ExpandButton = styled('div')` 
  position: relative;
`
