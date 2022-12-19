import styled from 'styled-components'
import { Form } from 'formik'
// import { FiArrowDownCircle } from 'react-icons/fi'

export const FlexDiv = styled('div')` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const FormContainer = styled(Form)`
  /* display: flex;
  align-items: flex-start; */
  margin-top: 1em;
   h2 {
    font-size: 1em;
  }
 
`

export const Arrow = styled('span')`
    transition: transform .5s ease-in-out;
    transform: ${(props) => `rotate(${props.rotate}deg)`};
    cursor: pointer;
`

export const InputsContainer = styled('div')`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 800px) {
     flex-direction: column;
  }
`

export const Left = styled('div')`
  display: flex;
  display: inline-block;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid black;
  @media only screen and (max-width: 800px) {
    width: 100%;
    border-right: none;
  }
`
export const Right = styled('div')`
  display: flex;
  display: inline-block;
  flex-direction: column;
  width: 50%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`

export const SupplementalInformation = styled('section')`

`

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`

export const Container = styled('div')`
  overflow-y: scroll;
  height: 90vh;
  width: 100vw;
  max-width: 1000px;
  background: white;
  
  border-radius: 1em;
  /* box-shadow: var(--m-primary-box-shadow); */
  box-shadow:  5px 5px 5px -3px #000000;

  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
  
  /* @media only screen and (max-width: 1600px) {
     width: 80vw;
  }

  @media only screen and (max-width: 800px) {
     width: 90vw;
  }

  @media only screen and (max-width: 600px) {
     width: 100vw;
  } */
 `

export const Line = styled('hr')` 
  width: 90%;
  margin: 2em 1.3em;
  background-color: rgb(48,48,50);
  height: .5px;
  border: none;
`

export const UploadMediaContainer = styled('div')` 
  margin-left: 1.3em;
  padding: .5em;
  border-radius: .5em;
  display: flex;
  box-shadow:  5px 5px 5px -3px #AAAAAA;
  background: #E5E5E5;

;

`

export const SectionDescription = styled('h2')`
  text-decoration: underline;
  @media only screen and (max-width: 600px) {
    /* display: none; */
  }

`

export const MobileOnlyLine = styled('hr')` 
  width: 90%;
  margin: 2em 1.3em;
  background-color: rgb(48,48,50);
  height: .5px;
  border: none;
  display: none;

  @media only screen and (max-width: 800px) {
    display: block;
  }
`
