import styled from 'styled-components'

export const MenuTimeContainer = styled('div')` 
  z-index: 99999;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5px 0;
  width: 8%;
  border-left: 1px solid lightgray;
  border-color: rgba(200,200,200,0.25);

`

export const Time = styled('span')`
  color: gray;
  font-size: 1vw;
  padding: 0 10px;
`
export const MenuIconContainer = styled('div')` 
  position: relative;
  padding: 10px;
  background-color: lightgray;
  border-radius: .1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2cdd9b;
  background-color: #e5f7f0;
  border-color: #d8f7eb;
  transition: all 1s;
  cursor: pointer;
  :hover {
    filter: brightness(0.85);
  }

`

export const ActionMenu = styled('ul')`
  z-index: 99999;
  display: flex;
  border: .5px solid lightgray;
  border-color: rgba(200,200,200,0.25) ;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  transform: translate(-55%, 55%) ;
  display: ${(props) => (props.isOpen ? 'block' : 'none')} ;
  width: 10vw;
  background-color: white;
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border-radius:  .5em;
  margin: 0;

`

export const ActionMenuItem = styled('li')`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  margin: 0 !important;
  color: black;
  transition: none;
  :hover {
    background-color: var(--m-btn-hover-color);

  }

  span {
    font-weight: 500;
    font-size: .65vw !important;
  }

`
