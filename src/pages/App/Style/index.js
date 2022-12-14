import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  width: 100vw;
  height: calc(100vh - var(--nav-size));
  margin: 0;
  padding: 0;

`

export const Content = styled('div')`
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
`


export const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`