import styled from 'styled-components'

export const Label = styled('label')` 
  background-image: url(${(props) => props.userIcon});
  background-size: cover;
  height: 4em;
  width: 4em;
  border-radius: 50%;
  cursor: pointer;
  img {
    height: 4em;
    width: 4em;
    border-radius: 50%;
    cursor: pointer
  }
`

export const UploadInput = styled('input')` 
  position: absolute; 
  left: -99999rem;
`
