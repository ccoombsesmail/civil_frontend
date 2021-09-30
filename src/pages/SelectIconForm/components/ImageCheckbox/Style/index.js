import styled from 'styled-components'



export const Label = styled('label')` 
  background-image: ${props => `url(${props.iconSrc})`};
  background-position: center no-repeat;
  background-size: cover;

  height: 3em;
  width: 3em;
  border-radius: 50%;
  margin: .5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Input = styled('input')`
  display: none;
  &:checked + ${Label} {
    background-image: ${props => `url(${props.iconSrc})`};
    border: 1px solid black;
    height: 50px;
    width: 50px;

  }
` 
