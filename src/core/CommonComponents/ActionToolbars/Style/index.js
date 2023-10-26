import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: .5em;
  justify-content: space-between;
  align-items: center;
  padding: .5em 1em;
  align-items: flex-end;
  span {
    color: black;
    font-size: 1rem;
  }

  img {
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
    margin: .3rem .8rem;
  }
  svg {
    width: 1.3rem;
    height: 1.3rem ;
    margin: .3rem .8rem;

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
  justify-content: flex-end;

`

export const Likes = styled('span')``
