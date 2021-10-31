import styled from 'styled-components'
import { Form } from 'formik'
import { FiArrowDownCircle } from 'react-icons/fi'

export const FormContainer = styled(Form)`
  /* display: flex;
  align-items: flex-start; */
  margin-top: 1em;
   h2 {
    font-size: 1em;
    margin: 0 1em;
  }
  svg {
    margin-bottom: 1em;
  }
`

export const Arrow = styled(FiArrowDownCircle)`
  transition: transform .5s ease-in-out;
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  cursor: pointer;
`

export const InputsContainer = styled('div')`
  display: flex;
  width: 100%;
`

export const Left = styled('div')`
  display: flex;
  display: inline-block;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid black;
`
export const Right = styled('div')`
  display: flex;
  display: inline-block;
  flex-direction: column;
  width: 50%;
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
  background: white;
  
  border-radius: 1em;
  box-shadow: 3px 3px 2px #cbced1,
              -3px -3px 2px #ffffff;
  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
 `

export const Line = styled('hr')` 
  width: 100%;
  margin: 2em 0;
  background-color: rgb(48,48,50);
  height: .5px;
  border: none;
`


export const UploadMediaContainer = styled('div')` 
  margin-left: 1.3em;
  display: flex;


`