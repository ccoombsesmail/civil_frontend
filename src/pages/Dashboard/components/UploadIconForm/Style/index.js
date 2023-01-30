import styled from 'styled-components'
import { Form } from 'formik'

export const FormContainer = styled(Form)`
  border-radius: .5em;
  padding: 0;
  section {
    padding: 10px 30px;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  h2 {
    padding: 20px 30px 0 30px;
  }
`

export const FlexDiv = styled('div')` 
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 0 30px 20px 30px;

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
  justify-content: flex-end;
  padding: 10px;
`
