/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('div')`
  width: calc(100vw - var(--sidebar-width));
  display: flex;
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
  width: 100%;
  flex-direction: column;
  background: white;
  border-left: 1px solid #dee2e6;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  .tab-content {
    padding-bottom: 40vh;
    background-color: white;
  }
  @media (max-width: 1250px) {
    width: 100%;

  }

`
