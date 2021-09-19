import styled from 'styled-components'
import { Form } from 'formik'

export const FormContainer = styled(Form)`
  display: flex;
  align-items: flex-start;
  margin-top: 1em;
  height: 10vh;
`

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    position: absolute;
    bottom: 0;
      padding: .2em .5em;
    background: #e0e5ec;
    border-radius: .4em;
    box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001,
   inset 0px 0px 0px 0px #fff9,
   inset 0px 0px 0px 0px #0001,
   inset 0px 0px 0px 0px #fff9,        inset 0px 0px 0px 0px #0001;
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


export const Toolbar = styled('div')`
  /* margin: .5em; */
  /* width: 100%; */


`