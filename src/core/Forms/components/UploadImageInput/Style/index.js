import styled from 'styled-components'

export const Label = styled('label')` 
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 10%;
  margin-right: 30px;
  img {
    width: 100%;
    height: auto;
  }
`

export const UploadInput = styled('input')` 
  position: absolute; 
  left: -99999rem;
`
