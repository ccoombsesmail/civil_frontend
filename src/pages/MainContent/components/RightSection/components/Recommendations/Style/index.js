/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('div')`
  width: calc(100vw - var(--sidebar-width));
  display: flex;
  /* padding-top: 5em; */
  margin-left: var(--sidebar-width);

  .tab-content {
   padding-bottom: 40vh;
   background-color: white;
 }

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

export const TabContainer = styled('div')` 
  flex: 25%;
  display: flex;
  z-index: 99;
  /* a: center; */
  flex-direction: column;
  background: white;
  border-left: 1px solid #dee2e6;

  .tab-content {
    padding-bottom: 40vh;
    background-color: white;
  }
  @media (max-width: 1250px) {
    width: 100%;

  }

`
