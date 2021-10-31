/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('div')`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 5em; */

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
