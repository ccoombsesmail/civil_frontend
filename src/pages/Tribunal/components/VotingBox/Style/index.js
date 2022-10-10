import styled from 'styled-components'

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

export const VotesAgainst = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 1.3vw;
  align-items: center;

  @media only screen and (max-width: 800px) {
    font-size: 4vw;
  }
  
`

export const VotesFor = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 1.3vw;
  align-items: center;
  @media only screen and (max-width: 800px) {
    font-size: 4vw;
  }

`

export const MiddleSection = styled('div')`

  span:first-child {
    font-size: 2vw;
    font-weight: bold;
    color: ${(props) => (props.verdict === 'Violation' ? 'red' : 'green')};
  }
  transform: translate(0, -35%);
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
