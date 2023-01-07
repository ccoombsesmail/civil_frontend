import styled from 'styled-components'

export const Item = styled('li')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 15vh;
  background-color: white;
  /* cursor: pointer; */
  padding-right: .5vw;
  transition: all 0.5s;

  :hover {
    background-color: #F8F9FA;
  }
`
