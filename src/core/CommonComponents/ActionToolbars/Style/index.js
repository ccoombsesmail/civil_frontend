import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: .5em;
  justify-content: space-between;
  align-items: center;
  padding: .5em 1em;

  span {
    color: black;
    font-size: 1rem;
  }

  img {
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
    margin: .3em .5em;
  }
  svg {
    width: 1.4rem;
    height: 1.4rem ;
    margin: .3em .5em;

  }
`

export const Left = styled('div')`
  display: flex;
  align-items: center;

  span {
    /* background-color: aliceblue; */
  }

`

export const Right = styled('div')`
  display: flex;
  align-items: center;
`

export const Likes = styled('span')``
