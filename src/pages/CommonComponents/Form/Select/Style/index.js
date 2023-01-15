import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  margin: auto;
  font-family: 'Ubuntu', sans-serif;
  width: var(--form-input-width);


  /* .fade {
    margin: auto;
    width: 85%;
  } */
`

export const Label = styled('label')`
  display: flex;
  justify-content: flex-start;
  color: var(--m-trim-color);
  font-size: .5em;
  font-weight: bold;

`

export const StyledSelect = styled('select')`
  display: block;
  margin: auto;
  padding: .5em;
  color: black;
  width: ${(props) => props.width || '100%'};
  height: 3.5em;
  font-size: .8em;
  font-weight: bold;
  line-height: var(--inputLineHeight);
  outline:none;
  background: #E5E5E5;
  border: ${(props) => (props.showError ? '1px solid var(--m-danger-color)' : '1px solid var(--bg)')};
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
    cursor: pointer;
  }
}
`
