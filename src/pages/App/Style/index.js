import styled from 'styled-components'


export const MainContainer = styled.main`
  display: flex;
  width: 100vw;
  height: calc(100vh - 8vh);
  margin: 0;
  padding: 0;

` 

export const Content = styled('div')`
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
`