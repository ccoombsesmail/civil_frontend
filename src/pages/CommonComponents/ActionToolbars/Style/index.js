import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: .5em;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5em;

  span {
    color: black;
  }

  img {
    width: 1.7em;
    height: 1.7;
    cursor: pointer;
    margin: .3em .5em;
  }
  svg {
    width: 1.7em;
    height: 1.7em ;
    margin: .3em .5em;

  }
`

export const Left = styled('div')`
  display: flex;
  align-items: center;

`

export const Right = styled('div')`
  display: flex;
  align-items: center;
`

export const Likes = styled('span')``
