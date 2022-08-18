import styled from 'styled-components'
import { COMMENT } from '../../../../enums/content_type'

export const Warning = styled('span')`
  display: flex;
  flex-direction: column;
  svg {
    margin-right: .5vw;
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
  background: var(--m-menu-item-hover);
  width: 90%;
  border-radius: .5em;
  padding: 20px 10px 10px 10px;
  cursor: pointer;
  height: ${(props) => (props.contentType === COMMENT ? 'clamp(0px, 60%, 200px)' : 'clamp(250px, 60%, 400px)')};
  width: clamp(330px, 70%, 800px);


`

export const Message = styled('h3')`
 
  text-align: center;
  font-weight: bold;
  font-size: .85vw;

  @media only screen and (max-width: 800px) {
    font-size: 3.7vw;
  }

  :hover {
    filter: brightness(.95)
  }
 
`
