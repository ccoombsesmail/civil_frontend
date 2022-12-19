import styled from 'styled-components'
import { Form } from 'formik'

export const Container = styled('div')`
  overflow-y: scroll;
  height: 90vh;
  background: white;
  border-radius: 1em;
  box-shadow:  5px 5px 5px -3px #000000;

  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
 `

export const FlexDiv = styled('div')` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const FormContainer = styled(Form)`
  margin-top: 1em;
   h2 {
    font-size: 1em;
    margin: 0 1em;
  }
`

export const InputsContainer = styled('div')`
  display: flex;
  width: 100%;
`

export const Left = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border-right: 1px solid black;
`
export const Right = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

export const SupplementalInformation = styled('section')`

`

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`

export const Arrow = styled('span')`
    transition: transform .5s ease-in-out;
    transform: ${(props) => `rotate(${props.rotate}deg)`};
    cursor: pointer;
`

export const Line = styled('hr')` 
  width: 90%;
  margin: 2em 1.3em;
  background-color: rgb(48,48,50);
  height: .5px;
  border: none;
`
