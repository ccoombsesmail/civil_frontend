import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: .5em;
  justify-content: space-between;
  align-items: center;
  /* border-top: .1px solid gray; */
  padding: 0 .5em;
  box-shadow:  7px 7px 14px #5a5a5a,
             -7px -7px 14px #ffffff;
  span {
    color: gray;
    font-size: .5em;
  }

  img {
    width: 1em;
    height: 1em;
    cursor: pointer;
  }
`