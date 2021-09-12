import styled from 'styled-components'

export const Container = styled('div')`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5em;
  
  /* justify-content: center; */
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
  flex-wrap: wrap;
  width: 100vw;
  padding: 0;
  margin: 0;
  svg:nth-child(1) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  #wavy-2 {
    position: relative;
    width: 100vw;
    transform: rotate(180deg);
  }

`
