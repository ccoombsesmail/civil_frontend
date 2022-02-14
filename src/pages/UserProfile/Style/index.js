import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

export const Container = styled('div')`
  width: calc(100% - 2vw);
  float:right;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    cursor: pointer;
  }
`

export const TabsIconContainer = styled('section')`
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
  height: 20vh;
  border-bottom: 1px solid gray;

`

export const StyledNav = styled(Nav)`

  --nav-tab-width: 6vw; 

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

`

export const Banner = styled('img')`
  aspect-ratio: 7.8;
  width: 100%;
`

export const Content = styled('section')` 
  /* background-color: #F1F8E9; */
  /* display: flex;
  justify-content: center;
  width: 100%; */
  height: 50vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background: #F0F2F5;
`

export const Middle = styled('div')` 
  flex: 50%;
  
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

`

export const UserIcon = styled('img')`  
  height: 4vw;
  width: 4vw;
  margin-bottom: 2vw;
  border-radius: 50%;

`

export const Bio = styled('p')` 
  color: black;
  font-size: .7vw;

`
