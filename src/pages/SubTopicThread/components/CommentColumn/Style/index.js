import styled from "styled-components";


export const Container = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  /* flex-grow: 1; */
  /* width: 33%; */
  /* background-color: ${props => props.color}; */
  margin: 0;
  padding: 0;
  border-left: 1px solid black;
  border-right: 1px solid black;

  width: 50vw;
  

  h1 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 1em;
    font-size: 1.8em;
    border-bottom: 1px solid black;
    color: white;
    border: none;
    outline: none;
    background-color: ${props => props.color}
  }
`



