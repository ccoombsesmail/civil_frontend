import styled from 'styled-components'

export const Description = styled('p')`
  width: 100%;
  font-size: 1vw;
  word-wrap: break-word;
  padding: 1em;

  @media only screen and (max-width: 600px) {
    font-size: 4vw;
  }
`
