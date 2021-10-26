import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: .5em;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5em;

  span {
    color: gray;
    font-size: .5em;
  }

  img {
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
    margin: .3em .5em;
  }
  svg {
    width: 1.5em !important;
    height: 1.5em  !important;
    margin: .3em .5em;

  }
`

export const Likes = styled('span')``
