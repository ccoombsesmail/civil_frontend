import styled from 'styled-components'

export const Container = styled('div')`
  width: 60vw;
  @media (max-width: 800px) {
    width: 100vw;
 }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vw;

  .tab-content {
    width: 100%;
  }

  .tab-pane {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

`
