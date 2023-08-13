import styled from 'styled-components'

export const FollowButtonContainer = styled('div')`
 path {
  transition: all .5s ease; 
  fill: #785b41 !important;
 } 
  :hover {
      path {
        fill: black !important;
      }
    }

`

export const FollowBtn = styled('button')`
  margin: 10px 0;
  width: clamp(200px, 16vw, 400px);
  height: clamp(20px, 5vh, 60px);
  padding: 15px;
  font-weight: 700;
  font-size: clamp(12px, 1vw, 22px);
  text-decoration: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all .5s ease; 
  display: flex;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: #f6e58d;
  color: #785b41;
  transition: all .5s ease 0s; 
  box-shadow: 0 10px #f9ca24;
  border: none;

  svg {
    margin-right: 5px;

  }

  :hover {
    opacity: .8;
    color: black;
    box-shadow: 0 5px #f9ca24;
  }

  @media only screen and (max-width: 800px) {
    box-shadow: 0 5px #f9ca24;
  }

`
