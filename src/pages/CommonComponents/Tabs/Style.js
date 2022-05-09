import styled from 'styled-components'
import { Tabs } from 'react-bootstrap'

export const ThemeTab = styled(Tabs)`
  z-index: 9999;

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
