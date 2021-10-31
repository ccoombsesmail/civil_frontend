import { createGlobalStyle } from 'styled-components'


/* --------------------------------


#EF5D73
----------------------------------*/
const GlobalStyle = createGlobalStyle`
/*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

/* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
/* *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
} */

/* Preferred box-sizing value */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/*
    Remove list styles (bullets/numbers)
    in case you use it combine with normalize.css
*/
ol, ul {
    list-style: none;
}

/* For images to not be able to exceed their container */
img {
    max-width: 100%;
}

/* removes spacing between cells in tables */
table {
    border-collapse: collapse;
}

/* revert the 'white-space' property for textarea elements on Safari */
textarea {
    white-space: revert;
}


  :root {
    --m-primary-color:  black;
    --m-primary-background-color:  #14213D;
    --m-primary-background-1-color: #37B381;
    --m-secondary-background-color: #83af9b;
    --m-primary-font-color: white;
    --m-primary-box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff; 
    --gutterSm: 0.4rem;
    --gutterMd: 0.8rem;
    --gutterLg: 1.6rem;
    --gutterXl: 2.4rem;
    --gutterXx: 7.2rem;
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

    /* color options 2  */

    --m-primary-background-2-color: #37B381;
    --m-secondary-background-2-color:  #242526;
    --m-menu-bg-color: #242526;
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

    --m-input-color: rgb(232,232,232);
    --m-danger-color: #E85D04;
    --m-trim-color:  #14213D;
    --m-danger-color-light: #E89660;

    /*      DROPDOWN       */
    --bg:  #242526;
    --bg-accent: #484a4f;
    --text-color: #dadce1;
    --nav-size: 7vh;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: .5s; 

  };

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: "Baloo 2", cursive;
    overflow-x: hidden;

  }
  .fade.modal.show {
    z-index: 999999;
  }

  .react-strap-modal {
    /* padding: 1em; */
    border: none;
    background: white;
    border-radius: 1em;
    width: 100%;
    background-color: var(--m-primary-background-color);
    background-color: white;
    z-index: 99999;

  }

  .modal-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99999;
    min-width: 55vw;
    min-height: 50vh;
    transform: translate(-50%, -50%) !important;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 0;
    margin: 0;
    font-family: var(--fontFamily);
    font-family: "Baloo 2", cursive;
    font-size: var(--fontSizeMd);
    line-height: var(--lineHeightMd);
  }
  .twitter-tweet {
    margin: 0 !important;
  }
   #twitter-widget-1::shadow div:last-child {
   display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .demo-wrapper, .demo-editor {
    display: flex;
    width: 100%;
    background-color: gray;
    height: 100%;
  }

  .ap {
    background-image: url('/fdc520ec92ab5996740abe9f9d8eb44a.png') !important;
  }

  .text-editor .ql-container {
    /* min-height: 10vw; */
    min-height: 5vh;
  }


  .menu-primary-enter {
    position: absolute;
    max-height: 0;
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
    max-height: 200px !important;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }

`

export default GlobalStyle
