import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  width: 100vw;
  height: calc(100vh);
  margin: 0;
  padding: 0;

`

export const Content = styled('div')`
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  
`

export const Wrapper = styled('div')`
  width: 100vw;
  /* height: 100vh; */
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
