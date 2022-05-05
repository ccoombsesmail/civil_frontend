import { createGlobalStyle } from 'styled-components'

/* --------------------------------

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
    /* list-style: none; */
  margin: 0;
  padding: 0;
}
li {
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

blockquote {
  border-left: 4px solid lightgray;
  padding-left: 5px;
}


  :root {
    --m-primary-background-color: #339C7D;
    --m-secondary-background-color: #E6EEF2;
    --m-primary-btn-color: #3DC393;
    --m-primary-btn-color:  #87C232;
    --m-primary-peripherals-color: #474a4d;
    --m-highlight-color: #F8CA41;
    --m-btn-hover-color: #F5F8FF;
    --m-menu-item-hover: #D9DFDF;

    --m-elastos-theme: #8530F1;
    /* --m-primary-background-1-color: #37B381; */
 
    --sidebar-width: 4vw;
    --m-primary-font-color: white;
    --m-primary-box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff; 

    /* EMOJI */
    unicode-emoji-picker {
  
      font-size: 24px;
      z-index: 9999;
      background-color: white;
    --min-width: 20.8em; /* 6 emojis wide */
    --min-height: 11.5em; /* 4 emojis tall */
    --max-width: 20.8em; /* 11 emojis wide */
    --max-height: 11.5em; /* 10 emojis tall */
    }
    /* EMOJI */


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
      (var(--inputFontSize) * var(--inputLineHeight)) + .15em
    );
    --inputTransitionDuration: var(--transitionDuration);
    --inputTransitionTF: var(--transitionTF);

    --m-input-color: rgb(232,232,232);
    --m-danger-color: #E85D04;
    --m-trim-color:  #14213D;
    --m-danger-color-light: #E89660;

    /*      DROPDOWN       */
    /* --bg:  #242526; */
    --bg:  white;
    --bg-accent: #484a4f;
    --text-color: #dadce1;
    --nav-size: 7vh;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: .5s; 

    /* CLERK*/
    --clerk-primary: #87C232;
    --clerk-primary-rgb: 135,194,50;
    --clerk-primary-d1: hsl(85,59%,43%);
    --clerk-primary-d2: hsl(85,59%,41%);
    --clerk-primary-l1: hsl(85,59%,92%);
    --clerk-primary-l2: hsl(85,59%,95%);
    --clerk-primary-a1: hsla(85,59%,48%,0.5);
    --clerk-primary-a2: hsla(85,59%,48%,0.25);
    --clerk-font-family: "Source Sans Pro", sans-serif;
    --clerk-font-color: #151515;
    --clerk-font-color-rgb: 21,21,21;
    --clerk-font-color-l1: hsl(0,0%,50%);
    --clerk-label-font-weight: 600;
    --clerk-button-font-family: "Source Sans Pro", sans-serif;
    --clerk-button-font-color: #ffffff;
    --clerk-button-font-weight: 600;
    --clerk-padding-mod: 1;
    --clerk-border-radius: 0.5em;
    --clerk-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    --clerk-background-color: #ffffff;
    --clerk-accounts-background-color: #ffffff;

  };

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: "Baloo 2", cursive;
    font-family: "Source Sans Pro", sans-serif ;
    overflow-x: hidden;

  }
  .fade.modal.show {
    z-index: 999999;
  }

  .fade.modal {
    transition: all .4s;
  }


  .react-strap-modal {
    border: none;
    border-radius: 1em;
    width: 100%;
    background-color: white;
    z-index: 99999;

  }

  .modal-backdrop {
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 99999 !important;

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

  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
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


  ::-webkit-scrollbar {
    display: none;
  }


  .text-editor .ql-container {
    /* min-height: 10vw; */
    min-height: 7vh;
  }


  .theme-tooltip {
    z-index: 999999999;
  }

  .popover {
    z-index: 999999999;
  }

  .sticky-popover {
    outline: none;
    border: none;
  }

  .feather {
    stroke: black;
    color: black;
  }


  /* ******************************** CLERK RELATED STUFF ******************************** */
  .cl-component.cl-user-button {
    width: 4rem !important;
    height: unset !important;
    /* height: 4rem !important; */
    margin-right: 1rem;
  } 

  .cl-component .cl-user-button-trigger>.cl-user-button-avatar {
    /* height: calc(.7* var(--nav-size)) !important;
    width: calc(.7* var(--nav-size)) !important; */

    width: 3vw !important;
    aspect-ratio: 32 / 32 !important;

  }

  /*********************************  Toastify related stuff  ******************************** */

  .toasty {
    z-index: 99999999999;
    div {
      white-space: pre-line !important;

    }
  }


  /* ----------------------------------------------
 * Generated by Animista on 2021-12-4 17:46:39
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-elliptic-top-fwd
 * ----------------------------------------
 */

.slide-in-elliptic-top-fwd {
-webkit-animation: slide-in-elliptic-top-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
animation: slide-in-elliptic-top-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
}
@keyframes slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
}


/* ----------------------------------------------
 * Generated by Animista on 2021-12-4 17:50:9
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-out-elliptic-bottom-bck
 * ----------------------------------------
 */

.slide-out-elliptic-bottom-bck {
-webkit-animation: slide-out-elliptic-bottom-bck 1s ease-in both;
animation: slide-out-elliptic-bottom-bck 1s ease-in both;
}
@-webkit-keyframes slide-out-elliptic-bottom-bck {
  0% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% -1400px;
            transform-origin: 50% -1400px;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(600px) rotateX(30deg) scale(0);
            transform: translateY(600px) rotateX(30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 1;
  }
}
@keyframes slide-out-elliptic-bottom-bck {
  0% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% -1400px;
            transform-origin: 50% -1400px;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(600px) rotateX(30deg) scale(0);
            transform: translateY(600px) rotateX(30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 1;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-12-4 18:7:41
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-pop-up-top
 * ----------------------------------------
 */

.text-pop-up-top {
-webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2021-12-4 18:10:19
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-contract-bck
 * ----------------------------------------
 */
/* ----------------------------------------------
 * Generated by Animista on 2021-12-4 18:11:44
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}


/* ----------------------------------------------
 * Generated by Animista on 2021-12-4 20:20:48
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-focus-in
 * ----------------------------------------
 */
@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}


.text-focus-in {
-webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}







`

export default GlobalStyle
