import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  padding-left: .5em;
  color: black;
  width: ${(props) => props.width || '30%'};
  background-color: var(--m-danger-color);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  height: .8em;
  span {
    font-size: .5em;
  }
`

export const StyledInput = styled('input')`

`
