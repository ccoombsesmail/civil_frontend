import styled from 'styled-components'

export const VideoPlayer = styled('iframe')`
  width: 100%;
  /* height: 45vw; */
  /* width: 45vw;   */
  height: clamp(400px, 25.31vw, 1000px);



`

export const Description = styled('p')`
  width: 100%;
  font-size: clamp(15px, 1.4vw, 22px);
  word-wrap: break-word;
  padding: 1em;
`

export const ExpandButton = styled('div')` 
  position: relative;
`
