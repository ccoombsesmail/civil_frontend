import styled from 'styled-components'

export const VotingContainer = styled('section')`
  position: relative;
  min-width: 600px;
  width: 70vw;
  height: clamp(350px, 14vw, 400px);
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
  width: 95%;

  @media (max-width: 600px) {
    width: 100%;
  }

  svg {
    @media only screen and (max-width: 800px) {
      width: 9vw;
      height: 9vw;
    }
  }

  span {
    font-size: clamp(20px, 1.3vw, 35px);

    /* @media only screen and (max-width: 800px) {
      font-size: 4vw;
    } */
  }
`

export const VotesAgainst = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 10%;
  top: 60%;
  transform: translate(0, -50%);
  font-size: clamp(18px, 1.3vw, 35px);
  align-items: center;

  @media only screen and (max-width: 800px) {
    right: 20%;
    top: 75%;
  }
`

export const VotesFor = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10%;
  top: 60%;
  transform: translate(0, -50%);
  font-size: clamp(18px, 1.3vw, 35px);
  align-items: center;
  @media only screen and (max-width: 800px) {
    left: 20%;
    top: 75%;
  }
`

export const MiddleSection = styled('div')`
  span:first-child {
    letter-spacing: 0.8vw;
    font-style: italic;

    font-size: clamp(25px, 2vw, 40px);
    font-weight: bold;
    color: ${(props) => (props.verdict === 'Violation' ? 'coral' : 'green')};
    path {
      fill: coral;
    }
  }
  span:nth-child(2) {
    margin-bottom: 5px;
    font-size: clamp(25px, 2vw, 40px)
  }
  span:nth-child(3) {
    font-size: clamp(25px, 2vw, 40px);
    border: var(--thin-border);
    border-style: inset;

    padding: 1vw 4vw;
    border-radius: 5px;
    color: ${(props) => (props.verdict === 'Violation' ? 'red' : 'green')};
  }
  transform: translate(0, -35%);
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
