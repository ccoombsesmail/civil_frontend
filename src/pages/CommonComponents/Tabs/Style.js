import styled from 'styled-components'
import { Tabs, Tab } from 'react-bootstrap'


export const ThemeTab = styled(Tabs)`
  z-index: 9999;

  li {
    border-radius: .5em;
    background-color: white;
    margin: .5em;
  }

  .active {
    border-radius: .5em;
    box-shadow: inset 1px 2px 5px #777;
  }

 .nav-link {
   color: black;
   font-weight: bold;
 }

`