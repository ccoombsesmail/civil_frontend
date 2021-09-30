import styled from 'styled-components'
import { Form } from 'formik'


export const FormContainer = styled(Form)`
  /* display: flex;
  align-items: flex-start; */
  height: 10vw;
  margin-top: 1em;
  border-radius: .5em;

  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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
`
