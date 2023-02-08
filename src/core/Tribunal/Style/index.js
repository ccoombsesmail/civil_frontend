import styled from 'styled-components'
import { ScalesSvg, PillarSvg } from '../../../svgs/svgs'

export const OuterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 60vh;
  /* background-color: #F2F6FC; */
  background-color: transparent;

`

export const Header = styled('header')`
  display: flex;
  align-items: center;
  margin: clamp(30px, 1vw, 100px) 0 clamp(30px, 1vw, 100px) 0;
  z-index: 9999;
  h1 {
    font-weight: 650;
    font-size: 2vw;
    letter-spacing: .4vw;
    @media only screen and (max-width: 600px) {
      font-size: 5.7vw;
    }
  }
  svg, img {
    width: 4vw !important;
    height: 4vw !important;
    @media only screen and (max-width: 600px) {
      width: 12vw !important;
      height: 12vw !important;
    }
    margin: 0 3vw;
  }
`
export const StyledScalesSvg = styled(ScalesSvg)`
  width: 4vw !important;
  height: 4vw !important;
  margin: 0 1vw;
`

export const StyledPillarSvg = styled(PillarSvg)`
  display: block;
`

export const InnerContainer = styled('div')`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 50vw;
  /* align-items: center; */
  @media (max-width: 1200px) {
    width: 80%;
  }
  
  @media (max-width: 800px) {
    width: 100%;
  }


`

export const VotingContainer = styled('section')`
  position: relative;
  width: 50%;
  height: 14vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border-radius: 0.5em;
  background-color: white;
  border: 0.5px solid lightgray;
  border-color: rgba(200, 200, 200, 0.25);
  margin: clamp(30px, 1vw, 100px) 0 clamp(30px, 1vw, 100px) 0;

  @media only screen and (max-width: 800px) {
    width: 90%;
    height: 30vw;
  }

  svg {
    @media only screen and (max-width: 800px) {
      width: 9vw;
      height: 9vw;
    }
  }

  span {
    @media only screen and (max-width: 800px) {
      font-size: 4vw;
    }
  }
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
  border-radius: 0.5em;
  /* background-color: var(--m-secondary-background-color); */
  background-color: white;
  font-size: clamp(15px, 1vw, 20px);
  padding: 2vw 4vw;
  margin: 2vw 4vw;
  @media only screen and (max-width: 800px) {
      margin: 2vw 2vw;

    }

    h2 {
      text-align: center;
    }

    span {
      margin-top: 5px;
      padding: 5px 10px;
      background-color: var(--m-secondary-background-color);
      border-radius: 5px;
    }
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
  @media only screen and (max-width: 800px) {
    font-size: 4vw;
  }
  
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

  @media only screen and (max-width: 800px) {
    font-size: 4vw;
  }
`

export const MiddleSection = styled('div')`

  span:first-child {
    font-weight: bold;
    color: red;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
