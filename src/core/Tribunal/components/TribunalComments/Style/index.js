import styled from 'styled-components'
import { Tabs } from 'react-bootstrap'

const ThemeTabNew = styled(Tabs)`
  z-index: 9999;
  background-color: white;
  li {
    background-color: white;
    margin: 0 .5em 0 0;

    div {
      display: flex;
      align-items: center;
    }
  }

  svg, img {
    margin-left: 10px;
    @media only screen and (max-width: 800px) {
      display: none;
    }
    height: 2vw;
  }

  .nav-link.active {
    opacity: 1;
  }


 .nav-link {
    border-radius: .5em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    transition: background-color .5s, opacity .5s;
    opacity: .5;

    color: black;
    font-weight: bold;
    font-size: 1.3vw;
    
    @media only screen and (max-width: 1200px) {
      font-size: 2vw;
    }

    @media only screen and (max-width: 600px) {
      font-size: 3vw;
      padding: .5rem .9rem;
      
    }

   
 }
 `

export const Container = styled('section')` 
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: #F2F6FC; */
  background-color: transparent;
  .TabContent {
    width: 100%;
    background-color: white;
  }

`

export const StyledThemeTab = styled(ThemeTabNew)`
  .nav-item {
    margin: 0 0.3em 0 0;
  }
`
