import styled from 'styled-components'

export const WordList = styled('ul')` 
  display: flex;
  flex-wrap: wrap;
  width: 100%;

`

export const WordInput = styled('input')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 20%;
  list-style: none;
  font-weight: bold;
  color: white;
  padding: 1vw .5vw;
  margin: .5vw;
  border-radius: .5em;
  border: none;
  background-color: var(--bg-accent);

`
