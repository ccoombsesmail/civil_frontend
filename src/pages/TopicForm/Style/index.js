import styled from 'styled-components'
import { Form } from 'formik'

export const FormContainer = styled(Form)`
  /* display: flex;
  align-items: flex-start; */
  margin-top: 1em;
`

export const InputsContainer = styled('div')`
  display: flex;
  width: 100%;
  h2 {
    margin: 0 1em;
  }
`

export const Left = styled('div')`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid black;
  /* align-items: center; */
`
export const Right = styled('div')`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* align-items: center; */
`

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`

export const Container = styled('div')`
  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
 `
