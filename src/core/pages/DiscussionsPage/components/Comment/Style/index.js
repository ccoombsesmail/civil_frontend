import styled from 'styled-components'

export const OuterContainer = styled('div')`
  position: relative;
  width: 100%;
  height: fit-content;
  z-index: 99;
  display: flex;
  justify-content: center;

`
export const CommentContainer = styled('li')`
  width: ${(props) => (props.isFocusedComment ? '95%' : '100%')};
  outline: none;
  border-radius: .4em;
  position: relative;
  list-style: none;
  margin-top: ${(props) => (props.isFocusedComment ? '0' : '5px')};
  background-color: #eee;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.isFocusedComment ? 'var(--m-form-color)' : 'white')};
  border: 1px solid lightgray;
  box-shadow: ${(props) => (props.isFocusedComment ? '-5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff' : 'none')};
  border-left-color: ${({ color }) => color};



  border-color: rgba(200,200,200,0.25);
  border-left-color: ${({ color }) => color};
  border-left-width: ${(props) => (props.hideBorder ? 0 : '5px')};

  :hover {
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
  filter: ${(props) => (props.shouldBlur ? 'blur(5px)' : 'unset')};
  pointer-events: ${(props) => (props.shouldBlur ? 'none' : 'initial')};
  position: relative;
  color: black;
  /* height: clamp(300px, 10vh, 800px); */
  padding: 1em 1em 2em 1em;
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
  padding: 0 0 .5em .5em;
  display: flex;
  flex-direction: column;
`
export const Footer = styled('div')`
  filter: ${(props) => (props.shouldBlur ? 'blur(5px)' : 'unset')};
  pointer-events: ${(props) => (props.shouldBlur ? 'none' : 'initial')};
  width: 100%;
`

export const Content = styled('p')`
  height: 80%;
  overflow: scroll;
  padding: 1em;
`
