import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  margin: 1.3em;
  font-family: 'Ubuntu', sans-serif;
`

export const Label = styled('label')`
  display: block;
  position: absolute;
  bottom: 50%;
  left: .8rem;
  color: var(--m-trim-color);
  font-size: .7em;
  font-weight: bold;
  line-height: var(--inputLineHeight);
  opacity: 0;
  transform: 
    translate3d(0, var(--labelDefaultPosY), 0)
    scale(1);
  transform-origin: 0 0;
  /* transition:
    opacity var(--inputTransitionDuration) var(--inputTransitionTF),
    transform var(--inputTransitionDuration) var(--inputTransitionTF),
    visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF),
    z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF); */

  :placeholder-shown + .Input-label {
    visibility: hidden;
    z-index: -1;
  }

`

export const StyledInput = styled('input')`
  display: block;
  /* margin: 1.2em 0 0 0; */
  padding: .5em;
  color: black;
  width: ${(props) => props.width || '30%'};
  height: 4vh;
  font-size: .8em;
  font-weight: bold;
  line-height: var(--inputLineHeight);
  border: none;
  outline:none;
  background: #E5E5E5;
  border: ${(props) => (props.showError ? '1px solid var(--m-danger-color)' : '1px solid var(--bg)')};
  border-radius: 0.4rem;
  /* transition: box-shadow var(--transitionDuration); */
  ::placeholder {
    color: var(--m-trim-color);
  }
  :focus {
    outline: none;
    box-shadow:  5px 5px 8px #ffffff, -5px -5px 8px #ffffff;
  }

  :not(:placeholder-shown) + ${Label},
  :focus:not(:placeholder-shown) + ${Label} {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform:
      translate3d(0, var(--labelTransformedPosY), 0)
      scale(var(--labelScaleFactor));
    /* transition:
      transform var(--inputTransitionDuration),
      visibility 0ms,
      z-index 0ms; */
}
`
