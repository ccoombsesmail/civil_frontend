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
  justify-content: center;
  margin-top: 0.2vw;
  background-color: white;
  padding: 20px;
  border-radius: .4vw;
  min-width: 400px;

  svg {
    margin-right: 1rem !important;
  }
  iframe {
    min-height: 640px;
  }
  b {
    color: #FFFFFF00;
    font-family: "Aventa", Sans-serif;
    font-size: clamp(14px, 2vw, 25px);
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
  background-color: #eee;
  /* margin: 4vw; */

  @media only screen and (max-width: 800px) {
    .tab-panel-user-profile-information {
        margin-left: 150px;
    }  
  }


  .cl-card {
    width: 60vw;
  }
  .cl-component.cl-user-profile .cl-main {
    margin: 3em 0 0 1em;
}
`
