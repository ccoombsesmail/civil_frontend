import styled from "styled-components";


export const Container = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  /* width: 33%; */
  /* background-color: ${props => props.color}; */
  margin: 0;
  padding: 0;
  /* border-left: 1px solid black;
  border-right: 1px solid black; */
  

  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 1em;
    font-size: 1.8em;
    border-bottom: 1px solid black;
    background-color: ${props => props.color}
  }
`



