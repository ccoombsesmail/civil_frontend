import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  margin: 0 1em 0 1em;
`

export const Label = styled('label')`
  display: block;
  position: absolute;
  bottom: 50%;
  left: .8rem;
  color: var(--m-trim-color);
  font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  opacity: 0;
  transform: 
    translate3d(0, var(--labelDefaultPosY), 0)
    scale(1);
  transform-origin: 0 0;
  transition:
    opacity var(--inputTransitionDuration) var(--inputTransitionTF),
    transform var(--inputTransitionDuration) var(--inputTransitionTF),
    visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF),
    z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);

  :placeholder-shown + .Input-label {
    visibility: hidden;
    z-index: -1;
  }

`

export const StyledInput = styled('input')`
  display: block;
  margin: 1.2em 0 0 0;
  padding: var(--inputPaddingV) var(--inputPaddingH);
  color: black;
  width: ${(props) => props.width || '30%'};
  height: 3em;
  font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: bold;
  line-height: var(--inputLineHeight);
  border: none;
  border: ${(props) => (props.showError ? '1px solid var(--m-danger-color)' : 'none')};
  border-radius: 0.4rem;
  transition: box-shadow var(--transitionDuration);
  background-color: var(--m-secondary-background-color);
  background-color: ${(props) => (props.showError ? 'var(--m-danger-color-light)' : 'var(--m-secondary-background-color)')};

  ::placeholder {
    color: var(--m-trim-color);
  }
  :focus {
    outline: none;
    box-shadow:  5px 5px 8px #ffffff,
             -5px -5px 8px #ffffff;
    /* box-shadow: 0.2rem 0.8rem 1.6rem #FCA311; */
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
}
`
