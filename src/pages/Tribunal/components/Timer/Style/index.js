import styled from 'styled-components'


export const Container = styled('div')`
  --smaller: .75;
  border-radius: 1rem;
  margin: 2vw 0;
  border: 1px solid rgba(200,200,200,0.25);
  box-shadow: 0 15px 10px 0 rgb(81 82 81 / 32%);
  /* font-family: -apple-system, 
    BlinkMacSystemFont, 
    "Segoe UI", 
    Roboto, 
    Oxygen-Sans, 
    Ubuntu, 
    Cantarell, 
    "Helvetica Neue", 
    sans-serif; */

    @media all and (max-width: 768px) {
      h1 {
        font-size: calc(1.5rem * var(--smaller));
      }
  
      li {
        font-size: calc(1.125rem * var(--smaller));
      }
  
      li span {
        font-size: calc(3.375rem * var(--smaller));
      }
    }
`


export const Headline = styled('div')`
  font-weight: normal;
  letter-spacing: .125rem;
  text-transform: uppercase;
  font-size: 1.5em;
  text-align: center;

`


export const TimeItem = styled('div')`
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
  span {
    display: block;
    font-size: 4.5rem;
    text-align: center;
  }
`

