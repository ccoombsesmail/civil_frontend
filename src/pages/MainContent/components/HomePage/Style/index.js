import styled from 'styled-components'

export const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`

export const Middle = styled('div')`
  display: flex;
  flex-direction: column;

`

export const Left = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`

export const Right = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;

`
