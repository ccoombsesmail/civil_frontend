import styled from 'styled-components'

export const OuterContainer = styled('div')` 
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20vh;

`

export const Container = styled('div')`
  padding: 3em 2em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 24px 48px;
  font-family: "Source Sans Pro", sans-serif;;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #151515;
  text-align: left;
  border-radius: 1rem;
  border: 1px solid transparent;
  background-color: white;
  width: 800px;

  @media only screen and (max-width: 800px) {
     width: 100%;
  }

  /* width: 840px; */
`

export const HeaderContainer = styled('div')`
  margin-bottom: 1.25em;

`

export const Header = styled('h1')`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;

`

export const SubHeader = styled('p')`
  color: #808080;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0 0 1rem 0;
`

export const FieldContainer = styled('div')`
  display: flex;
  width: 100%;
  padding-bottom: 1.5em;
`

export const FieldLabel = styled('div')` 
  display: flex;
  flex: 0 0 30%;
  margin-right: 0.5em;
  padding-top: 1.5em;
  line-height: 1.25em;
  font-size: 1em;
  font-weight: var(--clerk-label-font-weight, 600);

`

export const Textarea = styled('textarea')`
  min-height: 4vh;
  flex: 1;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  font-size: 1em;
  line-height: 1.25em;

  transition: color .2s ease-in-out,background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;
  padding: calc(1em - 2px);
  background: none;
  border-radius: 0.5em;
  border: 2px solid #e5e5e5;
  color: #151515;
  width: 100%;
  background-color: #fff;

  :focus {
    border-color: #87C232;
    box-shadow: none !important;
    outline: none !important;
    outline-offset: none !important;
  }
`

export const ButtonContainer = styled('div')` 
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
  width: 100%;


`
