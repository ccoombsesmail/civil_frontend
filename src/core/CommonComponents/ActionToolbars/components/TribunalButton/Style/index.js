import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;

 
`

export const Menu = styled('ul')` 
  display: flex;
  border: 1px solid lightgray;
  border-color: rgba(200,200,200,0.25);
  flex-direction: column;
  justify-content: center;
  position: absolute;
  transform: translate(-95%, -95%) ;
  display: ${(props) => (props.isOpen ? 'block' : 'none')} ;
  width: 15vw;
  background-color: white;
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border-radius:  .5em;
  margin: 0;
  svg {
    width: 2.2em !important;
    height: 2.2em !important;
  }
  @media only screen and (max-width: 600px) {
    width: 70vw;
  }

`

export const Item = styled('li')` 
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  margin: 0 !important;
  :hover, :active {
    background-color: var(--m-btn-hover-color);

  }

  span {
    font-weight: 500;
    font-size: .85vw;
    @media only screen and (max-width: 600px) {
      font-size: 3vw;
    }
  }

`
