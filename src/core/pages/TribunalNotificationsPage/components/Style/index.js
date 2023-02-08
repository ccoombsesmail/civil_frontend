import styled from 'styled-components'

export const LeftContainer = styled('div')`
  width: 22%;
  height: 100% ;
  display: flex;
  align-items: center;
  img {
    height: 5vh;
  }
  border-right: 1px solid lightgray;
  border-color: rgba(200,200,200,0.25);
  :hover {
    background-color: #F2F2F2;
  }
`

export const RightContainer = styled('div')`
  width: 20%;
  display: flex;
  align-items: center;
  img {
    height: 5vh;
  }
`

export const MiddleContainer = styled('div')`
  position: relative;
  margin-left: 50px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 3vh;
    position: absolute;
    top: 8px;
  }
  svg {
    height: 3vh;
    position: absolute;
    top: 8px;
  }
  h3 {
    font-size: clamp(20px, 1.1vw, 30px);
  }
  a {
    font-weight: bold;
    color: var(--m-primary-btn-color);
    :hover {
      filter: brightness(0.85);
    }
  }
`
