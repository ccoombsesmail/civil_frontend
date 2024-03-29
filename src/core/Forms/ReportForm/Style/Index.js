import styled from 'styled-components'
import { Form } from 'formik'

export const FormContainer = styled(Form)`
  margin-top: 0;
  border-radius: .5em;
  position: relative;

  .slide-menu-icon::before {
    font-size: 2.3em !important;
  }

  .slide-menu-icon {
    svg {
      width: 2.3em !important;
      height: 2.3em !important;
    }
  }

`

export const ItemList = styled('ul')` 
  display: flex;
  flex-direction: column ;
  width: 100%;
  align-items: center;

`

export const Item = styled('li')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
  border-radius: .5em;
  /* background-color: var(--m-secondary-background-color); */
  font-size: 1vw;
  padding: 0 1.25rem;
  /* margin: 1vw 0; */
  @media only screen and (max-width: 600px) {
      font-size: 3.7vw;
      width: 100%;
    }
`

export const Container = styled('div')`
  position: relative;
  margin: 20px 0 10px 0;
  width: clamp(400px, 50vw, 1000px);
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
  font-size: clamp(12px, 1vw, 20px);
  
`
