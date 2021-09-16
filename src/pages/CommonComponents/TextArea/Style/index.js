import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  width: 30vw;
  height: 30vh;

  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
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
// var(--m-secondary-background-color)
export const StyledTextArea = styled('textarea')`
  display: block;
  /* margin: 1.2em 0 0 0; */
  height: 100%;
  padding: 1em 1em 0 1em;
  color: black;
  width: ${(props) => props.width || '30%'};
  font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: bold;
  line-height: var(--inputLineHeight);
  border: none;
  border: ${(props) => (props.showError ? '1px solid var(--m-danger-color)' : 'none')};
  border-radius: 0.4rem;
  transition: box-shadow var(--transitionDuration);
  /* background-color: ${(props) => (props.showError ? 'var(--m-danger-color-light)' : '#F0F2F5')}; */
  background-color: #F0F2F5;

  /* box-shadow: var(--m-primary-box-shadow); */
  ::placeholder {
    color: var(--m-trim-color);
  }
  :focus {
    outline: none;
    /* box-shadow: 0.2rem 0.8rem 1.6rem var(--m-primary-background-color); */
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
