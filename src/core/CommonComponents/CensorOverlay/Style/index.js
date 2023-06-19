import styled from 'styled-components'
import { COMMENT } from '../../../../enums/content_type'

export const Warning = styled('span')`
  display: flex;
  flex-direction: column;
  svg {
    margin-right: .5vw;
  }
  @media only screen and (max-width: 800px) {
    font-size: 2.7vw;
    svg {
      transform: scale(.8);
    }
  }

`

export const MessageContainer = styled('div')` 
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin-top: ${(props) => (props.contentType === COMMENT ? '50px' : '0')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--m-form-color);
  width: 90%;
  border-radius: .5em;
  padding: 20px 10px 10px 10px;
  cursor: pointer;
  height: ${(props) => (props.contentType === COMMENT ? 'clamp(0px, 60%, 200px)' : 'clamp(250px, 60%, 400px)')};
  width: clamp(330px, 100%, 800px);
  @media only screen and (max-width: 600px) {
    border-radius: 0;
  }

  path {
    fill: white !important;
  }

  svg {
    margin: 5px;
  }
  
  button:hover {
    path {
    fill: black !important;
  }

    color: black !important;
  }

`

export const Message = styled('h3')`
 
  text-align: center;
  font-weight: bold;
  font-size: clamp(10px, 1.4vw, 25px);

  @media only screen and (max-width: 800px) {
    font-size: 2.7vw;
  }

  :hover {
    filter: brightness(.95)
  }
 
`
