import styled from 'styled-components'
import { Form } from 'formik'

export const FormContainer = styled(Form)`
  /* height: 10vw; */
  margin-top: 1em;
  border-radius: .5em;

  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`

export const FlexDiv = styled('div')` 
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 1vw;
  margin-bottom: 1vw;
  span {
    margin-left: 1vw;
  }
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

export const ButtonContainer = styled('div')`
  display: flex;
  align-items: center;
`
