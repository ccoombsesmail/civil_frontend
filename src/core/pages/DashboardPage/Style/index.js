import styled from 'styled-components'
// import { FiUser } from 'react-icons/fi'

export const FormContainer = styled('div')` 
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vw auto;

`

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

export const CivicPassesContainer = styled('div')` 
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 0.2vw;
  iframe {
    min-height: 640px;
  }
  b {
    color: #FFFFFF00;
    font-family: "Aventa", Sans-serif;
    font-size: 2vw;
    font-weight: 400;
    -webkit-text-stroke-width: 1px;
    stroke-width: 1px;
    -webkit-text-stroke-color: black;
    stroke: black;
  }

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
  align-items: center;
  /* margin: 4vw; */

  .cl-card {
    width: 60vw;
  }
  .cl-component.cl-user-profile .cl-main {
    margin: 3em 0 0 1em;
}
`
