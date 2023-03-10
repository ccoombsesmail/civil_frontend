/* eslint-disable max-len */
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

  img {
    width: clamp(60px, 5vw, 150px);
    height: clamp(60px, 5vw, 150px);

  }
`

export const HeaderContainer = styled('div')`
  display: flex;
  width: 100%;
  align-items: flex-end;
  border-bottom: 1px solid gray;

`

export const StyledNav = styled(Nav)`

  --nav-tab-width: 6vw; 
  --nav-tab-width-mobile: 17vw; 

  position: relative;
  transition: all 1s;

  // first-child not working for some reason
  div:nth-child(2) {
    border-top-left-radius:5px;
  }
  .nav-item:last-child {
    border-top-right-radius: 5px;
  }

  .nav-item {
    width: var(--nav-tab-width);
    background-color: ${(props) => props.backgroundColor || 'transparent'};
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
      transform: ${({ activeKey }) => `translateX(${activeKey * 17}vw)`};

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
      transform: ${({ activeKey }) => `translateX(${activeKey * 17}vw)`};
      height: 2.5px;

    }
    .nav-link {
      font-size: 2.5vw;
    }

  }


`

export const Banner = styled('div')`
  width: 100%;
  height: 45vh;
  background-image: url("https://cdn.discordapp.com/attachments/1048453486456619088/1065232803744202812/C00mbsie_create_a_background_image_of_a_field_with_a_19th_centu_74420bf5-1e90-44e6-9064-b5c6c5574098.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &::before {
  content: "";
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255,255,255, 1), rgba(255,255,255, .1));
}

`

export const Content = styled('section')` 
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background: #F0F2F5;
  justify-content: center;
`

export const Middle = styled('div')` 
  width: 60vw;
  @media (max-width: 800px) {

    width: 100%;

 }
  
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
  z-index: 2;

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
