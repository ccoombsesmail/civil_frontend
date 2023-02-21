import styled from 'styled-components'
import { Form } from 'formik'

export const FormContainer = styled(Form)`
  margin-top: 0;
  border-radius: .5em;
  position: relative;

`

export const InputContainer = styled('div')` 
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;

  p {
    text-align: center;
  }

`

export const Container = styled('div')`
  position: relative;
  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
 `
