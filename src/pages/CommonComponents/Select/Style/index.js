import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  margin: 0 1em;
`

export const Label = styled('label')`
  display: flex;
  justify-content: flex-start;
  color: var(--m-trim-color);
  font-family: inherit;
  font-size: .7em;
  font-weight: bold;

`

export const StyledSelect = styled('select')`
  display: block;
  margin: 0 0 0 0;
  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
  padding: .5em;
  color: black;
  width: ${(props) => props.width || '30%'};
  height: 2.5em;
  font-family: inherit;
  font-size: .8em;
  font-weight: bold;
  line-height: var(--inputLineHeight);
  border: none;
  outline:none;
  background: none;
  border: ${(props) => (props.showError ? '1px solid var(--m-danger-color)' : 'none')};
  border-radius: 0.4rem;
  transition: box-shadow var(--transitionDuration);

  ::placeholder {
    color: var(--m-trim-color);
  }
  :focus {
    outline: none;
    box-shadow:  5px 5px 8px #ffffff,
             -5px -5px 8px #ffffff;
  }

  :not(:placeholder-shown) + ${Label},
  :focus:not(:placeholder-shown) + ${Label} {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform:
      translate3d(0, var(--labelTransformedPosY), 0)
      scale(var(--labelScaleFactor));
    transition:
      transform var(--inputTransitionDuration),
      visibility 0ms,
      z-index 0ms;

  option {
    color: var(--m-trim-color);
    font-size: .8em;

  }
}
`
