import styled from 'styled-components'

export const Separator = styled('span')`
  margin: 0 10px;
  border-left: 1px solid lightgray;
  height: 80%;
`

export const Right = styled('div')`
  flex-basis: 35%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;

  img {
    margin-top: 10px;

    width: 25px;
    height: 25px;
  }


`

export const Left = styled('div')`
  flex-basis: 65%;
  display: flex;
  align-items: flex-start;
  margin-left: 1em;
  background-color: white;
  height: 100%;
  padding-top: 10px;
  :hover {
    background-color: lightgray;
  }
  button {
    margin: 5px 10px;
  }
  
  > img:first-child {
    margin-right: 5px;
  }

  /* @media only screen and (max-width: 800px) {
      font-size: 3.4vw;
    } */

`

export const Header = styled('div')` 
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.2em .5em;    
  background-color: white;
  transition: height 0.3s ease-in-out;
  height: 80px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  :hover {
    background-color: lightgray;
    ${Left} {
      background-color: lightgray;
    }
  }

  h2 {
    line-height: unset;
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    font-weight: bold;
    font-size: clamp(12px, 1vw, 20px);
    /* @media only screen and (max-width: 800px) {
      font-size: 3.4vw;
    } */
  }
  h3 {
    text-decoration: underline;
    font-size: clamp(10px, .8vw, 20px);
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    font-weight: bold;
    color: gray;
    :hover {
      color: var(--m-primary-btn-color);
    }
  }
`

export const Thumb = styled('img')` 
  flex-shrink: 0;
  width: 3vw;
  height: 3vw;      
  border-radius: 50%; 

  @media only screen and (max-width: 800px) {
     width: 9vw;
     height: 9vw;  
  }
`

export const UsernameContainer = styled('section')`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

`

export const CategoryAndTime = styled('div')` 

  display: flex;
  font-size: clamp(8px, .7vw, 12px);
  color: gray;
  span {
    margin: 0 5px;

  }
  time {
    display: flex;
    margin: 0 5px;
    color: gray;
  }

`

export const BadgeContainer = styled('div')`
  display: flex;
  background-color: aliceblue;
  border-radius: 30px;
  min-width: 100px;
  margin: 0 6px;
  button {
    box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(58, 65, 111, .5) 0 -3px 0 inset;;
    width: clamp(30px, 2vw, 30px);
    height: clamp(30px, 2vw, 30px);
  
  }
`

export const Title = styled.span`
  flex-grow: 1;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 30px;
  margin-top: 10px;
  width: 98%;
  text-align: center;
  transition: color 0.2s ease-in-out;
  text-decoration: underline;

   font-family: 'Nunito Sans', sans-serif;
;

`