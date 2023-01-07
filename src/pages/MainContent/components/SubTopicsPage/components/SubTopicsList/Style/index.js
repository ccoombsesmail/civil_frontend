/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('section')`

  width: 70vw;
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;

   > h1 {
    background-color: white;
    padding: .5em 2em;
    border-radius: 2em;
    box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;
  }
  b {
    color: var(--m-primary-color);
  }

  @media only screen and (max-width: 1250px) {
    width: 100vw
  }
`
