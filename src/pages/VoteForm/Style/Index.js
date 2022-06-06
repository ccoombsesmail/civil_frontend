import styled from 'styled-components'
import { Form } from 'formik'

export const FormContainer = styled(Form)`
  margin-top: 0;
  border-radius: .5em;
  position: relative;

`

export const ItemList = styled('ul')` 
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

`

export const Item = styled('li')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 40%;
  min-height: clamp(200px, 15vw, 450px);
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border-radius: .5em;
  background-color: var(--m-secondary-background-color);
  font-size: 1vw;
  padding: 2vw;
  margin: 1vw 0;
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

export const ItemDescription = styled('p')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 80%;
  margin: unset !important;
  @media only screen and (max-width: 800px) {
    font-size: 3vw;
  }
  
`
