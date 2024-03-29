/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('ul')`
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
  width: 100%;
  border: 1px solid lightgray;
  border-color: rgba(200,200,200,0.25);

  @media (max-width: 700px) {
    width: 100%;
  }

  h1 {
    border-radius: 20px;
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
    background-color: ${(props) => (props.isReplies ? 'var(--m-form-color)' : 'white')};

     @media only screen and (max-width: 600px) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;

    }
  }

  
   @media only screen and (max-width: 600px) {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`
