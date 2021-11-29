import styled from 'styled-components'
import { Form } from 'formik'

export const FormContainer = styled(Form)`
  margin-top: 0;
  border-radius: .5em;
  position: relative;

`

export const Description = styled('p')` 
  width: 90%;
  padding: .5em 0;
  margin-bottom: 2em;
  font-size: .85em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  color: black;
`

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 30vw;
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
   inset 0px 0px 0px 0px #fff9,
   inset 0px 0px 0px 0px #0001;
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

export const ToxicityControls = styled('div')`
  flex-grow: 1;
  display: flex;
  align-items: center;
  > div {
    margin-left: 1vw;
  }

  p {
    margin: 0 1em;
    color: #979cb0;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: .1vw;  
  }

`
