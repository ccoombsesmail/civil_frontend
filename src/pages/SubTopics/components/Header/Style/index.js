import styled from 'styled-components'

export const Container = styled('div')` 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1em;
  /* border: 1px solid gray; */
  /* border-top: none; */
  padding-top: 5em;
  z-index: 99;
  background-color: #F7F7F7;
  background-color: white;
  h1 {
    text-align: center;
    text-decoration: underline;
    letter-spacing: .2em;
    font-weight: bold;
  }

   @media only screen and (max-width: 600px) {
    padding: 1em 0;
  }

`

export const LinksContainer = styled('div')`
  width: 100%;
  margin-top: 2em;
  display: flex;
  ul:first-child {
    border-right: 1px solid gray;
  }
`
