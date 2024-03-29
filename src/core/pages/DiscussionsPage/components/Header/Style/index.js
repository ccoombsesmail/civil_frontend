import styled from 'styled-components'
import { LongDownArrow } from '../../../../../../svgs/svgs'

export const Container = styled('div')`
  position: relative ;
  display: flex;
  border: 1px solid rgba(200,200,200,0.25);
  border-bottom: none ;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 1em;
  z-index: 99;
  background-color: #F7F7F7;
  background-color: white;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  h1 {
    text-align: center;
    letter-spacing: .2em;
    margin: clamp(20px, 3vw, 40px) 0;
  }
  span {
    cursor: pointer;
  }

  @media (max-width: 1250px) {
    width: 100vw;
  }

  @media (max-width: 600px) {
    width: 100vw;
  }

   @media only screen and (max-width: 600px) {
    padding: 0;

  }

`

export const LinksContainer = styled('div')`
  width: 100%;
  margin-top: 2em;
  display: flex;
  ul:first-child {
    border-right: 1px solid gray;
  }
`

export const Description = styled('p')`
  width: 100%;
  font-size: .7vw;
  word-wrap: break-word;
  padding: 1em;
`

export const SpaceSummaryContainer = styled('div')`  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  border-radius: .5em;
  box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;
  border: none;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
`

export const StyledLongDownArrow = styled(LongDownArrow)` 
  margin-bottom: 2vw;
`

export const TextOverlay = styled('h2')`
  position: absolute;
  top: 7%;
  background-color: white;
  z-index: 100;
`
