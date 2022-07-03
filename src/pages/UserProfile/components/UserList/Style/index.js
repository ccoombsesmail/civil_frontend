import styled from 'styled-components'

export const List = styled('ul')` 
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 3vw;
  border-color: rgba(200,200,200,0.25);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  span:first-child {
    font-weight: 900;
  }
`

export const ListItem = styled('li')`
  list-style: none;
  display: flex;
  border-bottom: 1px solid black;
  background: white;
  padding: 1vw 0;
  cursor: pointer;
  :hover {
    filter: brightness(.9);
  }
`

export const UserIcon = styled('img')`
  border-radius: 50%;
  width: 4vw;
  height: 4vw;

`

export const FlexDiv = styled('div')` 
  display: flex;
  flex-direction: column;

`
export const UsernameContainer = styled('div')`
  display: flex;
  flex-direction: column;
`

export const UserBio = styled('p')`  
  font-size: .65vw;
  color: gray;
`
