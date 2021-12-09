import styled from 'styled-components'

export const SideBarContainer = styled('div')` 
  height: 100%;
  width: 12vw;
  max-width: ${(props) => (props.isOpen ? '12vw' : '2vw')};
  background-color: var(--m-menu-bg-color);
  box-shadow: var(--m-primary-box-shadow);
  transition: max-width .6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
  font-weight: bold;
  position: absolute;
  z-index: 99999;
  left: 0;
  flex: 0 0 12vw;

  .container {
    display: flex !important;
    justify-content: flex-end;
    margin-bottom: 1em;
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid black;
  }
  svg {
    cursor: pointer;
    border-radius: .3em;
    margin: .2em;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }

`

export const SideBarNav = styled('nav')` 
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
  z-index: 9999999;
  button {
    width: 90%;
    margin: 0;
    border-radius: var(--border-radius);
    padding: 5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    color: white;
  }

  button:hover {
    background-color: var(--bg-accent);
  }

  

`
