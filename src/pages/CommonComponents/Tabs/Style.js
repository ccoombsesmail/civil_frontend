import styled from 'styled-components'
import { Tabs } from 'react-bootstrap'

export const ThemeTab = styled(Tabs)`
  z-index: 9999;
  font-family: var(--clerk-font-family);
  li {
    border-radius: .5em;
    background-color: white;
    margin: .5em;
    @media only screen and (max-width: 600px) {
      /* margin: 0; */
    }
  }

  .active {
    border-radius: .5em;
    box-shadow: inset 1px 2px 5px #777;
  }

 .nav-link {
   color: black;
   font-weight: bold;
   font-size: 1vw;

    @media only screen and (max-width: 600px) {
      font-size: 3vw;
      padding: .5rem .9rem;
      
    }
 }

`

export const ThemeTabNew = styled(Tabs)`
  z-index: 9999;
  background-color: white;
  justify-content: space-between;

  li {
    /* border-radius: .5em; */
    background-color: white;
    margin: 0 .5em 0 0;

    div {
      display: flex;
      align-items: center;
    }

    @media only screen and (max-width: 600px) {
      /* margin: 0; */
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
    /* background-color: var(--m-primary-btn-color); */
    color: black;
    opacity: 1;
    border-width: 10px;
  }


 .nav-link {
    border-radius: .5em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    /* background-color: var(--clerk-primary-l1); */
    /* background-color: var(--m-primary-btn-color); */

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

 /* li:nth-child(1) {
  .nav-link {
      background-color: #FF6b4E;
    }
  }

  li:nth-child(3) {
  .nav-link {
      background-color: var(--m-elastos-theme);
    }
  } */

`
