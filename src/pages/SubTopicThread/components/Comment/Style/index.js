import styled from "styled-components";

import { FiUser } from 'react-icons/fi'
import IconButton from "../../../../CommonComponents/IconButton/Index";

export const CommentContainer = styled('li')`
  width: 95%;
  border: 1px solid black;
  border-radius: .4em;
  list-style: none;
  margin-top: 1em;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  /* padding: 1em; */
  :hover {
    background-color: var(--m-primary-background-color);
    /* filter: brightness(.8); */
  }
`

export const Header = styled('div')`
  display: flex;
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid black;
  justify-content: space-between;
  align-items: center;
`

export const Username = styled('b')` 
  color: black;
`


export const Date = styled('time')` 
  color: gray;
`

export const Body = styled('div')`
  position: relative;
  color: black;
  min-height: 10vh;
  padding: 1em;
  width: 100%;
  /* border-bottom: 1px solid black; */
`

export const UserIcon = styled(FiUser)`
  background-color: white;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const ExpandButton = styled('div')` 
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`

export const EvidenceSection = styled('div')` 
  background-color: #F0F2F5;
  width: 100%;
  word-break: break-all;
  border-bottom-left-radius: .4em;
  border-bottom-right-radius: .4em;
  padding-left: 1em;
  /* display: flex; */
  /* flex-wrap: wrap;
  word-wrap: break-word;
  white-space: nowrap; */
  /* padding: 1em; */
`
// export const Spacer = styled('span')` 
//   width: 1em;
//   `



