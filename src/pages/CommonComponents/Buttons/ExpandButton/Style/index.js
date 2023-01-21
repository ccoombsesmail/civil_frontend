import styled from 'styled-components'

export const ButtonBackground = styled('div')`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor || 'black'};
  border-radius: 0.85rem;
  overflow: hidden;
  transition: transform 0.6s cubic-bezier(0.1, 0, 0.3, 1);
  background-image: linear-gradient(to right,var(--m-primary-background-color),#83af9b);
  background-image: ${(props) => (props.civicButton && 'none !important')};

  ::before,
  ::after {
    content: '';
    position: absolute;
    background: #fff;
  }

  ::before {
    width: 110%;
    height: 0;
    padding-bottom: 110%;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 1);
  }

  ::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
  }
`

export const StyledButton = styled('button')`
  font-size: clamp(15px, 1.4vw, 25px);
  font-weight: bold;
  /* text-transform: uppercase; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: none;
  padding: 5px 12px;
  border-radius: 0.85rem;
  border: none;
  span {
    font-size: clamp(13px, .9vw, 25px);

    transition: color 0.6s;
    color: #fff;
    display: block;
    position: relative;
    padding: 1.5rem 3rem;

    /* mix-blend-mode: difference; */
  }

  svg {
    width: clamp(15px, 1.4vw, 25px);
    z-index: 999;
    padding-right: clamp(5px, .3vw, 10px);
    path {
      fill: white !important;
    }
  }



  @media (hover: hover) {
  :hover {
    svg path {
      fill: ${(props) => `${props.backgroundColor} !important` || 'black !important'};
    }
    span {
      color: ${(props) => props.backgroundColor || 'black'};
    }
    ${ButtonBackground} {
      transform: scale3d(1, 1, 1);
      border: 1px solid ${(props) => props.backgroundColor || 'black'};
      ::before {
        transition: transform 0.6s cubic-bezier(0.1, 0, 0.3, 1);
        transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
      }
      ::after {
        opacity: 1;
        transition-duration: 0.02s;
        transition-delay: 0.6s;
      }
    }
  }
}
`

export const Container = styled('div')`
  width: ${(props) => props.width || 'clamp(150px, 175pxpx, 200px)'};
  height: ${(props) => props.height || 'clamp(35px, 2.5vw, 40px)'};
  margin: ${(props) => props.margin ?? '0 1vw'};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    margin: clamp(7px, .4vw, 12px);
    width: clamp(24px, 2vw, 48px);
  }
  button:focus {
    /* Provide a fallback style for browsersthat don't support :focus-visible */
    outline: none;
  }


  button:focus-visible {
    /* Draw a very noticeable focus style for keyboard-focus on browsers that do support:focus-visible */
    outline: 2px solid black;
    outline-offset: 2px;
  }

  .button {
    pointer-events: auto;
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor || 'black'};

    border: none;
    /* padding: 1.5rem 3rem; */
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
  }

  .button::before,
  .button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
