import styled from 'styled-components'

export const Container = styled('div')`
  --m-label-font-size-DID-form: .9vw;
  --m-label-font-DID-form-mobile: 2vw;

  --m-label-font-size-form: .5vw;
  --m-label-font-form-mobile: 1vw;

  --m-input-height-DID-form: var(--form-element-height);
  --m-input-height-DID-form-mobile: var(--form-element-height);

  --m-input-height-form: var(--form-element-height);
  --m-input-height-form-mobile: var(--form-element-height);

  width: ${(props) => props.width || '100%'};

  span {
    color: red;
  }

  
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
  margin:  ${(props) => (props.isDIDForm ? '0 0 1em 0' : 'auto auto 1em auto')};
  /* width: ${(props) => props.width || '30%'}; */

  label, input {
    transition: all 0.2s;
    touch-action: manipulation;
  }

  input {
    font-size: ${(props) => (props.isDIDForm ? '1.5em' : '1em')};
    font-family: inherit;
    -webkit-appearance: none;
    border-radius: ${(props) => (props.showError ? 'var(--form-element-border-radius) var(--form-element-border-radius) 0 0' : 'var(--form-element-border-radius)')};
    border: ${({ validInput }) => {
    if (validInput === null) return '1px solid gray'
    if (validInput === true) return '2px solid var(--m-primary-btn-color)'
    return '2px solid var(--m-danger-color)'
  }};
    border-bottom: ${(props) => (props.showError ? 'none' : '1px solid gray')};;
    width: 100%;
    height: ${(props) => (props.isDIDForm ? 'var(--m-input-height-DID-form)' : 'var(--m-input-height-form)')};
    background-color: var(--m-form-color); 
    padding-left: .5em;
    cursor: text;
    ::placeholder  {
      opacity: 0;
      transition: inherit;
      padding-left: 5px;
      
    }
    @media only screen and (max-width: 700px) {
      height: ${(props) => (props.isDIDForm ? 'var(--m-input-height-DID-form-mobile)' : 'var(--m-input-height-form-mobile)')};
    }
  }

  input:focus {
    outline: 0;
  }

  label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: ${(props) => (props.isDIDForm ? 'var(--m-label-font-size-DID-form)' : 'var(--m-label-font-size-form)')};
    color: #ccc;
    @media only screen and (max-width: 700px) {
      font-size: ${(props) => (props.isDIDForm ? 'var(--m-label-font-size-DID-form-mobile)' : 'var(--m-label-font-size-form-mobile)')};
    }
  }

  input:placeholder-shown + label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: ${(props) => (props.isDIDForm
    ? 'translate(1vw, calc( var(--m-label-font-size-DID-form)*1.5 + var(--m-input-height-DID-form)/2)) scale(1.5)'
    : 'translate(1vw, calc( var(--m-label-font-size-form)*1.5 + var(--m-input-height-form)/2)) scale(1.5)')};
    
    @media only screen and (max-width: 700px) {
      transform: ${(props) => (props.isDIDForm
    ? 'translate(1vw, calc( var(--m-label-font-size-DID-form-mobile)*1.5 + var(--m-input-height-DID-form-mobile)/2)) scale(1.5)'
    : 'translate(1vw, calc( var(--m-label-font-size-form-mobile)*1.5 + var(--m-input-height-form-mobile)/2)) scale(1.5)')};
    }
  }

 

  input:focus::placeholder {
    opacity: 1;
  }

  input:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
    color: black;
  }

`

export const OuterContainer = styled('div')`
  width: clamp(300px, 90%, 450px);
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`
