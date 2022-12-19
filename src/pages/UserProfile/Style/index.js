import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

export const Container = styled('div')`
  width: calc(100%);
  float:right;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    cursor: pointer;
  }
`

export const TabsIconContainer = styled('section')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 15vw;
  margin-right: 3vw;
`

export const HeaderContainer = styled('div')`
  display: flex;
  width: 100%;
  align-items: flex-end;
  border-bottom: 1px solid gray;

`

export const StyledNav = styled(Nav)`

  --nav-tab-width: 6vw; 
  --nav-tab-width-mobile: 15vw; 

  position: relative;
  transition: all 1s;

  .nav-item {
    width: var(--nav-tab-width);
  }

  .line {
    transition: transform .6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    position: absolute;
    bottom: 0;
    height: 3.5px;
    border-radius: 1px;
    width: var(--nav-tab-width);
    background-color: #87C232;
    transform: ${({ activeKey }) => `translateX(${activeKey * 6}vw)`};
  }
  .nav-link {
    color: gray;
    font-weight: bold;
    font-size: 1vw;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1250px) {
    .nav-item {
      width: var(--nav-tab-width-mobile);
    }
    .line {
      width: var(--nav-tab-width-mobile);
      transform: ${({ activeKey }) => `translateX(${activeKey * 15}vw)`};

    }
    .nav-link {
      font-size: 2vw;
    }

  }

  @media (max-width: 700px) {
    .nav-item {
      width: var(--nav-tab-width-mobile);
    }
    .line {
      width: var(--nav-tab-width-mobile);
      transform: ${({ activeKey }) => `translateX(${activeKey * 15}vw)`};
      height: 2.5px;

    }
    .nav-link {
      font-size: 3vw;
    }

  }


`

export const Banner = styled('img')`
  width: 100%;
  max-height: 45vh;
`

export const Content = styled('section')` 
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background: #F0F2F5;
  width: 100%;
  justify-content: center;
`

export const Middle = styled('div')` 
  /* flex: 100%; */
  width: 60vw;
  
`

export const Left = styled('div')` 
  flex: 25%;
  display: flex;
  justify-content: center;
`

export const Right = styled('div')` 
  flex: 25%;
`

export const ExperienceContainer = styled('div')` 
  display: flex;
  flex-direction: column;
  background: white;
  width: 80%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: .5vw;
  margin-top: 1vw;

`

export const Experience = styled('p')`
  display: flex;
  font-size: .8vw;
  @media (max-width: 700px) {
   
    font-size: 2vw;

  }


`

export const UserIcon = styled('img')`  
  height: 4vw;
  width: 4vw;
  border-radius: 50%;
  transform: translate(0, -50%);

`

export const Bio = styled('p')` 
  color: black;
  font-size: .7vw;
  margin: 0 0 0 1vw;
  padding-left: 1vw;
  border-left: 1px solid gray;

  @media (max-width: 700px) {
   
    font-size: 2vw;

  }

`

export const FlexDiv = styled('div')` 
  display: flex;
  margin-bottom: 1vw;

`
export const FullWidthDiv = styled('div')` 
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1vw;

`
