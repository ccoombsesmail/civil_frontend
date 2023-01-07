import styled from 'styled-components'

export const BgImage = styled('div')` 
  background-image: url('https://civil-dev.s3.us-west-1.amazonaws.com/assets/town_square.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  z-index: -1;
&::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255,255,255, 1), rgba(255,255,255, .1));
}

`

export const HomePageGrid = styled('div')`
  /* width: 100vw;
  height: 100vh; */
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`

export const SubTopicsGrid = styled('div')`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
    justify-items: center;

  }
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
  @media (max-width: 1250px) {
    width: 100%;

  }

`
