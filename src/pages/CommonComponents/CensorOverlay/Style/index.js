import styled from 'styled-components'

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--m-menu-item-hover);
  width: 90%;
  border-radius: .5em;
  padding: 20px 10px 10px 10px;
  cursor: pointer;
  height: 200px;

`

export const Message = styled('h3')`
 
  text-align: center;
  font-weight: bold;
  font-size: .85vw;

  :hover {
    filter: brightness(.95)
  }
 
`
