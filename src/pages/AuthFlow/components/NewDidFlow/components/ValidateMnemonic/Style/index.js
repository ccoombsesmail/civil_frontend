import styled from 'styled-components'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
`

export const WordList = styled('ul')` 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

`

export const WordSelectionList = styled('ul')` 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50vw;
  li[data-selected='true'] {
    background-color: red;
    position: absolute;
  }
  li {
    /* transform:
    rotateX(51deg)
    rotateZ(43deg); */
  transform-style: preserve-3d;
  border-radius: .5em;
  box-shadow:
    1px 1px 0 1px #f9f9fb,
    -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    28px 28px 28px 0 rgba(34, 33, 81, 0.25);
  transition:
    .4s ease-in-out transform,
    .4s ease-in-out box-shadow;
      cursor: pointer;
    &:hover {
      transform: scale(1.1);
      box-shadow:
        1px 1px 0 1px #f9f9fb,
        -1px 0 28px 0 rgba(34, 33, 81, 0.01),
        54px 54px 28px -10px rgba(34, 33, 81, 0.15);
    }
    &[data-selected='true'] {
      position: absolute;
    }
  }


`

export const WordInput = styled('input')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 11vw;
  height: 8vh;
  font-size: 1vw;
  display: block;
  font-weight: bold;
  color: white;
  padding: 1vw .5vw;
  margin: .5vw;
  border-radius: .5em;
  border: none;
  background-color: var(--bg-accent);

  &:disabled {
    background-color: whitesmoke;
    border: 1px solid var(--m-elastos-theme);
  }

`
