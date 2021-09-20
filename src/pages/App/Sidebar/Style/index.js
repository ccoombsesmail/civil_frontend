import styled from "styled-components";

export const SideBarContainer = styled('div')` 
  height: 100%;
  width: 12vw;
  max-width: ${props => props.isOpen ? '12vw' : '3vw'};
  background-color: white;
  box-shadow: var(--m-primary-box-shadow);
  transition: max-width .6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: static;

  .container {
    display: flex !important;
    justify-content: flex-end;
    margin-bottom: 2em;
    padding-bottom: 1em;
    border-bottom: 1px solid black;
  }
  svg {
    cursor: pointer;
    border-radius: .3em;
    padding: .2em;
  }

  svg:first-child:hover {
    background-color: gray;
  }

`


export const SideBarNav = styled('nav')` 
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  li {
    width: 100%;
    margin: 0;
    padding: 0 .75rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`