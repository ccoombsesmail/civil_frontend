import styled from 'styled-components'

export const SearchItem = styled('a')`
    display: flex;
    align-items: center;
    background: white;
    color: black;
    padding: 15px;
    width: 100%;
    cursor: pointer;

    :hover { 
      filter: brightness(.95)

    }

    span {
      justify-content: center;
      width: 50%;
      margin: auto;
      b {
        display: inline;
      }
    }
  `
export const FlexDiv = styled('div')`
  display: flex;
  width: 30%;

  @media screen and (max-width: 450px) {
    width: 50%;
  }
`
