/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('div')`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vw;

 @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100vw;
    margin-left: 0;
  }
`
export const MainContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

`

export const VerticalLine = styled('div')`
  border-left: 3px solid gray;
  height: 30vh;
  position: relative;
  margin-bottom: 10px;
  :before {
    border: 1.2px solid gray;
    height: 25px;
    content: "";
    position: absolute;
    top: 27.5vh;
    left: -11px;
    transform:rotate(-44deg);
    -webkit-transform:rotate(-44deg);
    -moz-transform:rotate(-74deg);
    -ms-transform: rotate(-74deg);
  }
  ::after {
    border: 1px solid gray;
    height: 25px;
    content: "";
    position: absolute;
    top: 27.5vh;
    left: 5px;
    transform:rotate(12deg);
    -webkit-transform: rotate(42deg);
    -moz-transform:rotate(12deg);
    -ms-transform: rotate(12deg);
}

`

export const Line = styled('hr')` 
  width: 70%;
  margin: 2em 0 2em 0;
  background-color: rgb(48,48,50);
  height: .5px;
  border: none;
`

export const HeaderContainer = styled('section')`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  width: 100%;
  li {
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

`
