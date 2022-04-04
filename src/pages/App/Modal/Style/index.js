import styled from 'styled-components'

export const CloseModalButton = styled('button')`
  position: absolute;
  top: .2vw;
  right: .2vw; 
  border-radius: 5px;
  background-color: transparent;
  font-size: 1em;
  font-weight: bolder;
  border: none;
  outline: none;
  cursor: pointer;
  transition: filter .2s linear;
  :hover {
    filter: drop-shadow(0 2px 12px black) brightness(.8);

  }
`

export const ModalWrapper = styled('div')` 
.modal-header {
  border-bottom: 1px solid black;

  }

.modal-title {
  font-weight: bold;
  font-size: 1.5em;
}

.modal-footer {
  border-top: 1px solid black;
  width: 100%;
  padding-top: 1.5em;
  margin-top: 1.5em;

}
`
