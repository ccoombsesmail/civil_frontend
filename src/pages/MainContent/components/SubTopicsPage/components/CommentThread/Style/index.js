import styled from 'styled-components'

export const ThreadContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;

`
export const Container = styled('div')`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
    background-color: var(--m-primary-background-color);
    border-radius: 1em;
    h1 {
      max-width: 30vw;
    }
    b {
     color: var(--m-primary-color)
    }
  }
`

export const ColumnContainer = styled('section')`
  display: flex;
  justify-content: space-evenly;
  /* border-top: 1px solid gray; */
  width: 100%;

  ul:first-child {
    /* border-right: .1px dashed rgb(48,48,50); */
  }

   ul:last-child {
    /* border-left: .1px solid rgb(48,48,50); */
  }


`
