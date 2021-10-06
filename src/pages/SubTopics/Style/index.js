/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('div')`
  width: 100vw;
  height: 200%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 5em; */
  background-color: #F0F2F5;
  background-color: #E8EAED;

  > h1 {
    padding: .5em 2em;
    border-radius: 2em;
    box-shadow:  -5px -5px 10px #5a5a5a,
             5px 5px 10px #ffffff;
  }
  b {
    color: var(--m-primary-color);
  }
  .tab-content {
   padding-bottom: 40vh;
   background-color: #E8EAED;
 }
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
