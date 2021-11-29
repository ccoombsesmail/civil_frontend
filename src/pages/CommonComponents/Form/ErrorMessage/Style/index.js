import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  padding: .5em;
  color: var(--m-danger-color);
  width: ${(props) => props.width || '30%'};
  background-color: var(--m-danger-color);
  background-color: transparent;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  height: .8em;
  span {
    font-size: .65em;
  }
`

export const StyledInput = styled('input')`

`
