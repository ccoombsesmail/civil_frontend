/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('section')`

  width: 70vw;
  /* padding-bottom: 20vh; */
  display: flex;
  flex-direction: column;
  align-items: center;

   > h1 {
    background-color: white;
    padding: .5em 2em;
  }
  b {
    color: var(--m-primary-color);
  }

  @media only screen and (max-width: 1250px) {
    width: 100vw
  }
`

export const ActionItemsContainer = styled('div')`
  padding: 2em;
  width: clamp(380px, 50vw, 1000px);
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  /* margin-bottom: 1em; */
  @media only screen and (max-width: 1250px) {
    width: 100vw
  }

`
