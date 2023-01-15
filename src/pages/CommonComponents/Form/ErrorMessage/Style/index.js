import styled from 'styled-components'

export const Container = styled('div')`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: .5em;
  color: white;
  width: ${(props) => props.width || '100%'};
  background-color: var(--m-danger-color);
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
