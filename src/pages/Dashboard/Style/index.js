import styled from 'styled-components'
// import { FiUser } from 'react-icons/fi'

export const Label = styled('label')` 
  background-image: url('https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/64_1.png');
  background-size: cover;
  height: 4em;
  width: 4em;
  border-radius: 50%;
  cursor: pointer;
`

export const UploadInput = styled('input')` 
  position: absolute; 
  left: -99999rem;
`

// export const UploadIcon = styled(FiUser)`
//   background-color: gray;
//   border-radius: 50%;
//   cursor: pointer;
// `

export const Container = styled('div')` 
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em;
`
