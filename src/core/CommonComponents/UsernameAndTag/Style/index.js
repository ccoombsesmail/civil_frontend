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
    font-size: clamp(12px, 1vw, 20px);
   
  }
    h3 {
    text-decoration: underline;
    font-size: clamp(10px, .8vw, 18px);
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    font-weight: bold;
    color: gray;
    cursor: pointer;
    text-underline-offset: 2px;
    :hover {
      color: var(--m-primary-btn-color);
    }
  }
`
