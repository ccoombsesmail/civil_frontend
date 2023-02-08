import styled from 'styled-components'
import { Form } from 'formik'

export const FormContainer = styled(Form)`
  margin-top: 1em;
  width: 100%;

`

export const InputsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  div:first-child {
    width: 80%;
  }
  input {
    width: 100%;
  }
`

export const FieldWrapper = styled('div')`
  display: flex;
  width: 80%;
  align-items: center;
`

export const Container = styled('div')`
  width: 100%;
  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
 `
