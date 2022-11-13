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
export const Line = styled('hr')` 
  width: 90%;
  margin: 1em 0 2em 0;
  background-color: rgb(48,48,50);
  height: .5px;
  border: none;
`

export const HeaderContainer = styled('section')`
  display: flex;
  flex-direction: row;
  width: 100%;
  li {
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

`
