import styled from 'styled-components'

export const VideoPlayer = styled('iframe')`
  height: 20vw;
  width: 100%;
`

export const Description = styled('p')`
  width: 100%;
  font-size: 1vw;
  word-wrap: break-word;
  padding: 1em;

  @media only screen and (max-width: 600px) {
    font-size: 4vw;
  }
`
