import styled from 'styled-components'

export const Description = styled('div')`
  width: 100%;
  font-size: 1vw;
  word-wrap: break-word;
  padding: 1em;
  max-height: fit-content;
  height: auto;

  @media only screen and (max-width: 600px) {
    font-size: 4vw;
  }
`

export const LinkSectionContainer = styled('div')`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  height: ${({ isOpen }) => (isOpen ? '10vh' : 0)};
  transition: opacity 0.4s, height 0.8s !important;


 
`
