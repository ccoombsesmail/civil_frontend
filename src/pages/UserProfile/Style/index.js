import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

export const Container = styled('div')`
  width: calc(100% - 2vw);
  float:right;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled('section')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 15vw;
  padding-top: 10vh;
  box-shadow: 0 4px 2px -2px gray;
`

export const StyledNav = styled(Nav)`
  position: relative;
  /* box-shadow: 0 4px 2px -2px gray; */
  transition: all 1s;

  .nav-item {
    width: 4vw;
    
  }

  .line {
    transition: transform .6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    position: absolute;
    bottom: 0;
    height: 1.5px;
    border-radius: 1px;
    width: 4vw;
    background-color: gray;
    transform: ${({ activeKey }) => `translateX(${activeKey * 4}vw)`};
  }
  .nav-link {
    color: gray;
    font-weight: bold;
    /* border-bottom: 1px solid gray; */
  }

`

export const Banner = styled('img')`
  aspect-ratio: 7.8;
  width: 100%;
`

export const Content = styled('section')` 
  background-color: #F1F8E9;
  height: 50vh;
  padding-left: 15vw;
  width: 100%;
`

export const UserIcon = styled('img')`  
  height: 4vw;
  width: 4vw;
  margin-bottom: 2vw;
  border-radius: 50%;

`
