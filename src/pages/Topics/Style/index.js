import styled from 'styled-components'

export const Container = styled('div')`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* padding-top: 5em; */
`

export const BorderContainer = styled('div')`
  width: 40vw;
  border: 1px solid gray;
  padding: 5em;
    background-color: white;

`

export const TopicsHeader = styled('p')` 
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
  flex-wrap: wrap;
  /* width: 40vw; */
  padding: 0;
  margin: 5em 0 0 0;
  padding-bottom: 30vh;
  background-color: #F0F2F5;
  background-color: white;

`
