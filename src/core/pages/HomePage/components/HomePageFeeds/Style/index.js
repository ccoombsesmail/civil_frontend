import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  height: 100%;
`

export const BorderContainer = styled('div')`
  width: 50vw;
  max-width: 50vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(200,200,200,0.25);
  border-top: none;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 15px 10px 0 rgb(81 82 81 / 32%);
  border-radius: 1rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
  overflow: scroll;

  @media only screen and (max-width: 800px) {
     width: 80vw;
     max-width: 80vw;

  }

  @media only screen and (max-width: 600px) {
     width: 100vw;
     max-width: 100vw;

  }

`

export const SpacesHeader = styled('p')` 
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  border-radius: 1em;
  font-weight: bold;
  text-transform: capitalize;
  border: 1px solid black;
  box-shadow:  5px 5px 4px #5a5a5a,
             -5px -5px 4px #ffffff;
  b {
    color: var(--m-primary-color)
  }
`

export const CardContainer = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  padding: 0;
  margin: 0em auto 0 auto;
  background-color: #F0F2F5;
  background-color: white;
  width: 100%;

  @media only screen and (max-width: 800px) {
     width: 100%;
  }

`
