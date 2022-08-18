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
  /* border-bottom: 2px solid #ddd; */
  box-shadow: 0 4px 12px -1px rgba(#121621, .08);
  background-color: white;

  li {
    /* border-radius: .5em; */
    background-color: white;
    margin: 0 .5em 0 0;
    @media only screen and (max-width: 600px) {
      /* margin: 0; */
    }
  }

  svg, img {
    margin-left: 10px;
    @media only screen and (max-width: 800px) {
      display: none;
    }
  }

  .nav-link.active {
    background-color: var(--m-primary-btn-color);
    color: white;
    opacity: 1;

  }

  li:nth-child(2) {
    .nav-link.active {
      opacity: 1;
    }
    .nav-link {
      opacity: .5;
      color: white;
    }

  }



 .nav-link {
    border-radius: .5em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    /* background-color: var(--clerk-primary-l1); */
    background-color: var(--m-primary-btn-color);

    transition: background-color .5s, opacity .5s;
    opacity: .5;

    color: white;
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
