import styled from 'styled-components'
import { ScalesSvg } from '../../../svgs/svgs'

export const OuterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 60vh;
`

export const Header = styled('header')` 
  display: flex;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 2vw;
  }
  svg { 
    width: 4vw !important;
    height: 4vw !important;
    margin: 0 3vw;
  }
  
`
export const StyledScalesSvg = styled(ScalesSvg)` 
    width: 4vw !important;
    height: 4vw !important;
    margin: 0 1vw;

`

export const InnerContainer = styled('div')`
  position:  relative;
  display: flex;
  justify-content: space-between ;
  /* align-items: center; */
  width: 100%;
`

export const VotingContainer = styled('section')`
  position: relative;
  width: 50%;
  height: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border-radius: .5em;
  background-color: white;
  border: .5px solid lightgray;
  border-color: rgba(200,200,200,0.25) ;

`

export const ReportStatsContainer = styled('ul')`
  display: flex;
`

export const ReportStatItem = styled('li')`
  background-color: var(--m-menu-item-hover);


  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border-radius: .5em;
  background-color: var(--m-secondary-background-color);
  font-size: 1vw;
  padding: 2vw;
  margin: 1vw 0;
  padding: 2vw 4vw;
  margin: 2vw 4vw;
`
export const VotesAgainst = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 2vw;
  align-items: center;

`

export const VotesFor = styled('div')` 
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 2vw;
  align-items: center;
`
