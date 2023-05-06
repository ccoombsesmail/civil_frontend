import styled from 'styled-components'

export const ThreadContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  @media (max-width: 600px) {
    width: 100vw;
    }




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
  width: 100vw;


  ul {
    background-color: white;
  }
  ul:first-child {
    /* border-right: .1px dashed rgb(48,48,50); */
  }

   ul:last-child {
    /* border-left: .1px solid rgb(48,48,50); */
  }


`


export const ListContainer = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  margin: 0;
  padding: 0;
  color: black;
  border-radius: 20px;

  z-index: 99;
  opacity: .99;
  width: clamp(700px, 50vw, 1200px);
  border: 1px solid lightgray;
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
