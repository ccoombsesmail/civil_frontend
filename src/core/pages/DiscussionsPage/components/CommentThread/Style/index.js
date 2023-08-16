import styled from 'styled-components'

export const ThreadContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 700px) {
    width: 100vw;
  }

`

export const ColumnContainer = styled('section')`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20vh;
  width: 100%;

`
