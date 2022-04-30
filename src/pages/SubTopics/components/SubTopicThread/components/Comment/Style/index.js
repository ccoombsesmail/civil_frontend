import styled from 'styled-components'

export const CommentContainer = styled('li')`
  width: 100%;
  outline: none;
  border-radius: .4em;
  list-style: none;
  margin-top: 1em;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid lightgray;
  border-color: rgba(200,200,200,0.25);
  :hover {
    /* opacity: .9; */
    /* filter: brightness(.9); */
    /* background-color: #ef5d4566; */
    background-color: #D8FFF1;
  }

   @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
`

export const Header = styled('div')`
  display: flex;
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid gray;
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
`

export const Thumb = styled('img')` 
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%; 
`

export const UserInfoContainer = styled('div')`
  display: flex;
`

export const ExpandButton = styled('div')` 
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`

export const EvidenceSection = styled('ul')` 
  background-color: #F0F2F5;
  width: 100%;
  word-break: break-all;
  padding: 0 .5em .5em .5em;
  display: flex;
  flex-direction: column;
`

export const Content = styled('p')` 
  padding: 1em;
`
