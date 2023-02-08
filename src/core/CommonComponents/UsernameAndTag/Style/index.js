import styled from 'styled-components'

export const Container = styled('section')`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
    h2 {
    line-height: unset;
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    font-weight: bold;
    font-size: 1vw;
    @media only screen and (max-width: 800px) {
      font-size: 3.4vw;
    }
  }
    h3 {
    text-decoration: underline;
    font-size: .8vw;
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    font-weight: bold;
    color: gray;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      font-size: 3vw;
    }
    :hover {
      color: var(--m-primary-btn-color);
    }
  }
`
