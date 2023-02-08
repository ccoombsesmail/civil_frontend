import styled from 'styled-components'


export const Label = styled('label')` 
  cursor: pointer;
  input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none;
  }

  span {
    padding: .3em .8em;
    border: none;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    color: white;
    border-radius: 5px;
    margin: 1px .4em;
    background: ${props => props.color || 'gray'};
    user-select: none;
    font-size: .5em;
    font-weight: bold;
  }

  input:checked + span {
    box-shadow: inset 1px 2px 5px #777;
    transform: translateY(1px);
    filter: brightness(.8)
  }

`
