/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export const VotingContainer = styled('section')`
  position: relative;
  width: 70vw;
  /* height: clamp(350px, 14vw, 400px); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border-radius: 0.5em;
  border: 0.5px solid lightgray;
  border-color: rgba(200, 200, 200, 0.25);
  margin: 20px 0;
  width: 95%;
  background-color: var(--m-menu-item-hover);

  @media (max-width: 600px) {
    width: 100%;
  }

  svg {
    @media only screen and (max-width: 800px) {
      width: 9vw;
      height: 9vw;
    }
  }
`

export const VotesAgainst = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 5vw;
  font-size: clamp(20px, 1.3vw, 35px);
  align-items: center;
  background: white;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  color: black;
  box-shadow: 15px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  margin: 20px auto;
  border-radius: 20px;
  background-color: ${(props) => (props.isPassing ? '#e4f8f0' : 'white')};
  border: ${(props) => (props.isPassing === 'No Violation' ? ' 1px solid #1ea97c' : 'none')};
  
  :hover {
    border-radius: 20px 20px 50% 50% / 20px 20px 5% 5%;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.25);
  }
  @media only screen and (max-width: 800px) {
    box-shadow: 8px 8px rgba(0, 0, 0, 0.15);
    :hover {
      box-shadow: 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`

export const VotesFor = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: clamp(20px, 1.3vw, 35px);
  align-items: center;
  background: white;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  color: black;
  box-shadow: 15px 15px rgba(0, 0, 0, 0.15);
  /* box-shadow: 5px 5px #fa9898; */

  background-color: ${(props) => (props.isViolation ? '#ffe7e6' : 'white')};
  border: ${(props) => (props.isViolation ? ' 1px solid #fa9898' : 'none')};
  
  transition: all 0.4s ease;
  padding: 5vw;
  margin: auto;
  border-radius: 20px;
  :hover {
    border-radius: 20px 20px 50% 50% / 20px 20px 5% 5%;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.25);
  }
  @media only screen and (max-width: 800px) {
    box-shadow: 8px 8px rgba(0, 0, 0, 0.15);
    :hover {
      box-shadow: 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`

export const MiddleSection = styled('div')`
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  path {
    fill: var(--primary-color);
  }
`

export const VotesContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
