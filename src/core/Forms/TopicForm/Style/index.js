import styled from 'styled-components'
import { Form } from 'formik'
// import { FiArrowDownCircle } from 'react-icons/fi'

export const UploadImage = styled('img')`
  border-radius: 1em;
  max-width: 500px;
  margin-top: 2vw;

`

export const UploadVideo = styled('video')`
  border-radius: 1em;
  max-width: 100%;
  margin-top: 2vw;

`

export const Footer = styled('div')` 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0 10px 0;
  padding: 20px 0 10px 0;
  border-top: 1px solid #ccc;
`

export const FlexDiv = styled('div')` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: ${(props) => props.direction || 'row'};
`

export const FlexDivLink = styled('div')` 
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  margin: auto;
  width: var(--form-input-width);
  /* height: var(--form-element-height); */
  .dropdown {
    top: 50px;
    left: 0;
  }
  .toolbar-item {
    background: var(--m-form-color) !important;
    width: 100%;
    height: var(--form-element-height);
    justify-content: flex-start !important;
  }

  // not ideal. Don't want the hide the dropdown text when reusing this component outside the text editor
  @media screen and (max-width: 1100px) {
    .dropdown-button-text {
      display: flex !important;
    }
  }



`
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  width: 100%;
  margin-top: 1em;
   h2 {
    font-size: 1em;
  }

  #insert-embed-node {
    width: 100%;
    display: flex;
    justify-content: center;
    > div {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  iframe {
    width: 100% !important;
    aspect-ratio: 16 / 9;
  }
 
`

export const Arrow = styled('span')`
    transition: transform .5s ease-in-out;
    transform: ${(props) => `rotate(${props.rotate}deg)`};
    cursor: pointer;
`

export const InputsContainer = styled('div')`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 800px) {
     flex-direction: column;
  }
`

export const Left = styled('div')`
  display: flex;
  display: inline-block;
  flex-direction: column;
  width: 100%;
  .toolbar {
    height: 50px !important;
  }
  /* border-right: 1px solid black; */
  @media only screen and (max-width: 800px) {
    width: 100%;
    border-right: none;
  }
`
export const Right = styled('div')`
  display: flex;
  display: inline-block;
  flex-direction: column;
  width: 50%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`

export const SupplementalInformation = styled('section')`

`

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`

export const Container = styled('div')`
  overflow-y: scroll;
  height: 75vh;
  width: clamp(400px, 60vw, 1100px);
  background: white;

  @media only screen and (max-width: 700px) {
    width: 100%;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  
  border-radius: 1em;
  ::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #eee;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #eee;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #527640;
}

  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
  
  @media (max-width: 700px) {
    border-radius: 0;
  }
 `

export const Line = styled('hr')` 
  width: 90%;
  margin: 2em 1.3em;
  background-color: rgb(48,48,50);
  height: .5px;
  border: none;
  padding: 0;
`

export const UploadMediaContainer = styled('div')` 
  margin-left: 1.3em;
  padding: .5em;
  border-radius: .5em;
  display: flex;
  box-shadow:  5px 5px 5px -3px #AAAAAA;
  background: #E5E5E5;

;

`

export const SectionDescription = styled('h2')`
  text-decoration: underline;
  @media only screen and (max-width: 600px) {
    /* display: none; */
  }

`

export const MobileOnlyLine = styled('hr')` 
  width: 90%;
  margin: 2em 1.3em;
  background-color: rgb(48,48,50);
  height: .5px;
  border: none;
  display: none;

  @media only screen and (max-width: 800px) {
    display: block;
  }
`
