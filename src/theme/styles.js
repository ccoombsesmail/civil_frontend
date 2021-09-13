import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --m-primary-color: #B9314F;
    --m-primary-background-color: #ece5ce;
    --m-secondary-background-color: #83af9b;
    --m-primary-font-color: white;
    --m-primary-box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff; 
    --gutterSm: 0.4rem;
    --gutterMd: 0.8rem;
    --gutterLg: 1.6rem;
    --gutterXl: 2.4rem;
    --gutterXx: 7.2rem;
    --colorPrimary400: #7e57c2;
    --colorPrimary600: #5e35b1;
    --colorPrimary800: #4527a0;
    --fontFamily: "Baloo 2", cursive;
    --fontSizeSm: 1.2rem;
    --fontSizeMd: 1.6rem;
    --fontSizeLg: 2.1rem;
    --fontSizeXl: 2.8rem;
    --fontSizeXx: 3.6rem;
    --lineHeightSm: 1.2;
    --lineHeightMd: 1.8;
    --transitionDuration: 300ms;
    --transitionTF: cubic-bezier(0.645, 0.045, 0.355, 1);
    
    /* floated labels */
    --inputPaddingV: var(--gutterSm);
    --inputPaddingH: var(--gutterLg);
    --inputFontSize: var(--fontSizeMd);
    --inputLineHeight: var(--lineHeightSm);
    --labelScaleFactor: 0.7;
    --labelDefaultPosY: 50%;
    --labelTransformedPosY: calc(
      (var(--labelDefaultPosY)) - 
      (var(--inputPaddingV) * var(--labelScaleFactor)) - 
      (var(--inputFontSize) * var(--inputLineHeight)) + .2em
    );
    --inputTransitionDuration: var(--transitionDuration);
    --inputTransitionTF: var(--transitionTF);

    /* --m-secondary-background-color: #FCA311; */
    --m-input-color: rgb(232,232,232);
    --m-danger-color: #E85D04;
    --m-trim-color: #B9314F;
    --m-danger-color-light: #E89660;

  };

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: "Baloo 2", cursive;

  }

  .react-strap-modal {
    /* position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%); */
    padding: 1em;
    border: none;
    background: white;
    border-radius: 1em;
    width: 100%;
    background-color: var(--m-primary-background-color);

  }

  .modal-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    min-width: 60vw;
    min-height: 50vh;
    transform: translate(-50%, -50%) !important;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
    width: 100vw;
    padding: 0;
    margin: 0;
    font-family: var(--fontFamily);
    font-family: "Baloo 2", cursive;
    font-size: var(--fontSizeMd);
    line-height: var(--lineHeightMd);
  }

`

export default GlobalStyle
