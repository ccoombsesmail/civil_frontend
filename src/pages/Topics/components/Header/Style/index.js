import styled from 'styled-components'

export const HeaderContainer = styled('div')` 
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 2vw 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0 1vw;
    font-size: 1.1vw;
    color: gray
  }
`

export const UserIcon = styled('img')`  
  flex-shrink: 0;
  width: 3vw;
  height: 3vw;      
  border-radius: 50%; 
`

export const FlexDiv = styled('div')`  
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
`
