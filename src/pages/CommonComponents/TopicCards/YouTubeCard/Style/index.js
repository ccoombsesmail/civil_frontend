import styled from 'styled-components'

export const VideoPlayer = styled('iframe')`
  height: 20vw;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    height: 50vw;
  }

  @media only screen and (max-width: 800px) {
    height: 50vw;
  }
  @media only screen and (max-width: 600px) {
    height: 40vw;
  }
`

export const Description = styled('p')`
  width: 100%;
  font-size: .6em;
  word-wrap: break-word;
  padding: 1em;
`
