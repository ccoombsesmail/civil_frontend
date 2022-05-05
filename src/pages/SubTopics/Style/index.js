/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('div')`
  width: calc(100vw - 4vw);
  display: flex;
  /* padding-top: 5em; */
  margin-left: var(--sidebar-width);

  .tab-content {
   padding-bottom: 40vh;
 }
`
export const MainContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

`
export const CardContainer = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  width: 85vw;
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
  /* flex-wrap: wrap; */
  width: 80%;

  li {
    margin: 0;
  }

`

export const Left = styled('div')` 
  flex: 20%;
  display: flex;
  justify-content: center;
`

export const TabContainer = styled('div')` 
  flex: 25%;
  display: flex;
  /* a: center; */
  flex-direction: column;
  background: white;
  border-left:1px solid #dee2e6;

`
