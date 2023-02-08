import styled from 'styled-components'

export const Container = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  h2 {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    width: 100%;
    font-weight: bold;
    text-align: center;
  }
`

export const Link = styled('a')`
  display: block;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin: .3em 0;
`
