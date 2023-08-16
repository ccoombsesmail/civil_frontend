import styled from 'styled-components'

export const ThreadContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 70vw; */
  width: 100%;
  @media (max-width: 600px) {
    width: 100vw;
    }

`

export const ColumnContainer = styled('section')`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  ul {
    background-color: white;
  }
`

export const ListContainer = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  margin: 0;
  padding: 0;
  padding-bottom: 20vh;
  color: black;
  border-radius: 20px;

  z-index: 99;
  opacity: .99;
  width: 100%;
  border-color: rgba(200,200,200,0.25);

  @media (max-width: 700px) {
    width: 100%;
  }

  h1 {
    display: flex;
    width: 100%;
    align-items: center;
    font-weight: bold;
    padding: 1em;
    font-size: clamp(15px, 1vw, 30px);
    border-bottom: 1px solid black;
    color: black;
    border: none;
    outline: none;
    background-color: var(--m-form-color);
  }

  .List {
    @media (max-width: 700px) {
      width: 100% !important;
    }

  }

`
