import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


.tag {
  
  text-decoration: underline;
  font-size: clamp(10px, .8vw, 18px);
  border-top-left-radius: .5em;
  border-top-right-radius: .5em;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  text-underline-offset: 2px;
  :hover {
    color: var(--m-primary-btn-color);
  }

}

.List div div {
  transition: all .5s;

}
.List div {

}

.List > div > div:last-child {
  padding-bottom: 200vh;
}
.List {
  background-color: rgb(248, 249, 250);
  width: 100%;
}

.List::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #eee;
}

.List::-webkit-scrollbar
{
  width: 12px;
  background-color: #eee;
  display: none;
  }

.List::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #527640;
}

.ExcalidrawModal__overlay {
  z-index: 9999999999999999999 !important;
}

[data-testid="WRAPPER_CONTAINER"] {
  z-index: 99999999999;
  > div {
    @media (max-width: 1250px) {
      transform: translate(0, -35%);
      height: 140vh !important;

    }
  }
}

[data-testid="IFRAME"] {
  min-height: 640px;
}

.wallet-adapter-button {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    line-height: 48px;
    padding: 0 24px;
    border-radius: 4px;
    width: 15rem;
}

.wallet-adapter-button-trigger {
    background-color: #512da8;
    background-image: linear-gradient(to bottom,var(--primary-color), var(--primary-color)) !important;

}

.wallet-adapter-button:not([disabled]):focus-visible {
    outline-color: white;
}

.wallet-adapter-button:not([disabled]):hover {
    background-color: #1a1f2e;
}

.wallet-adapter-button[disabled] {
    background: #404144;
    color: #999;
    cursor: not-allowed;
}

.wallet-adapter-button-end-icon,
.wallet-adapter-button-start-icon,
.wallet-adapter-button-end-icon img,
.wallet-adapter-button-start-icon img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

.wallet-adapter-button-end-icon {
    margin-left: 12px;
}

.wallet-adapter-button-start-icon {
    margin-right: 12px;
}

.wallet-adapter-collapse {
    width: 100%;
}

.wallet-adapter-dropdown {
    position: relative;
    display: inline-block;
}

.wallet-adapter-dropdown-list {
    position: absolute;
    z-index: 99;
    display: grid;
    grid-template-rows: 1fr;
    grid-row-gap: 10px;
    padding: 10px;
    top: 100%;
    right: 0;
    margin: 0;
    list-style: none;
    background: #2c2d30;
    border-radius: 10px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: opacity 200ms ease, transform 200ms ease, visibility 200ms;
    font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.wallet-adapter-dropdown-list-active {
    opacity: 1;
    visibility: visible;
    transform: translateY(10px);
}

.wallet-adapter-dropdown-list-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 20px;
    width: 100%;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    height: 37px;
    color: #fff;
}

.wallet-adapter-dropdown-list-item:not([disabled]):hover {
    background-color: #1a1f2e;
}

.wallet-adapter-modal-collapse-button svg {
    align-self: center;
    fill: #999;
}

.wallet-adapter-modal-collapse-button.wallet-adapter-modal-collapse-button-active svg {
    transform: rotate(180deg);
    transition: transform ease-in 150ms;
}

.wallet-adapter-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity linear 150ms;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1040;
    overflow-y: auto;
}

.wallet-adapter-modal.wallet-adapter-modal-fade-in {
    opacity: 1;
}

.wallet-adapter-modal-button-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 18px;
    right: 18px;
    padding: 12px;
    cursor: pointer;
    background: #1a1f2e;
    border: none;
    border-radius: 50%;
}

.wallet-adapter-modal-button-close:focus-visible {
    outline-color: white;
}

.wallet-adapter-modal-button-close svg {
    fill: #777;
    transition: fill 200ms ease 0s;
}

.wallet-adapter-modal-button-close:hover svg {
    fill: #fff;
}

.wallet-adapter-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.wallet-adapter-modal-container {
    display: flex;
    margin: 3rem;
    min-height: calc(100vh - 6rem); /* 100vh - 2 * margin */
    align-items: center;
    justify-content: center;
}

@media (max-width: 480px) {
    .wallet-adapter-modal-container {
        margin: 1rem;
        min-height: calc(100vh - 2rem); /* 100vh - 2 * margin */
    }
}

.wallet-adapter-modal-wrapper {
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1050;
    max-width: 400px;
    border-radius: 10px;
    background: #10141f;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
    font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    flex: 1;
}

.wallet-adapter-modal-wrapper .wallet-adapter-button {
    width: 100%;
}

.wallet-adapter-modal-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
    padding: 64px 48px 48px 48px;
    text-align: center;
    color: #fff;
}

@media (max-width: 374px) {
    .wallet-adapter-modal-title {
        font-size: 18px;
    }
}

.wallet-adapter-modal-list {
    margin: 0 0 12px 0;
    padding: 0;
    width: 100%;
    list-style: none;
}

.wallet-adapter-modal-list .wallet-adapter-button {
    font-weight: 400;
    border-radius: 0;
    font-size: 18px;
}

.wallet-adapter-modal-list .wallet-adapter-button-end-icon,
.wallet-adapter-modal-list .wallet-adapter-button-start-icon,
.wallet-adapter-modal-list .wallet-adapter-button-end-icon img,
.wallet-adapter-modal-list .wallet-adapter-button-start-icon img {
    width: 28px;
    height: 28px;
}

.wallet-adapter-modal-list .wallet-adapter-button span {
    margin-left: auto;
    font-size: 14px;
    opacity: .6;
}

.wallet-adapter-modal-list-more {
    cursor: pointer;
    border: none;
    padding: 12px 24px 24px 12px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    background-color: transparent;
    color: #fff;
}

.wallet-adapter-modal-list-more svg {
    transition: all 0.1s ease;
    fill: rgba(255, 255, 255, 1);
    margin-left: 0.5rem;
}

.wallet-adapter-modal-list-more-icon-rotate {
    transform: rotate(180deg);
}

.wallet-adapter-modal-middle {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px 24px 24px;
    box-sizing: border-box;
}

.wallet-adapter-modal-middle-button {
    display: block;
    cursor: pointer;
    margin-top: 48px;
    width: 100%;
    background-color: #512da8;
    padding: 12px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    color: #fff;
}


*,
*::before,
*::after {
    box-sizing: border-box;
}


@media (max-width: 1250px) {
  * {
  /* font-size:calc(12px + 1.5vw) !important; */

  }
}

a {
  text-decoration: none;
}

ol, ul, h1, h2, h3, h4, h5 {
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
hr {
  z-index: 99;
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
    /* New theme attempt */
    --m-primary-btn-color: #87ACA3;
    --m-primary-btn-color: #74B20D;
    --m-primary-btn-color: #56899e;
    --m-primary-btn-color:  #56899e;
    --m-primary-background-color: #256347;
    /* --m-primary-background-color:  #527640; */
    --box-shadow-inset: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;

    --m-form-color: #e6eef9;
    --form-element-height: 45px;
    --form-input-width: clamp(300px, 90%, 450px);
    --form-element-border-radius: 8px;

    --m-secondary-background-color: #1e392a;
    --m-secondary-background-color: #EBF0FB;
    /* --m-secondary-background-color: #828081; */

    /* New theme attempt */

    --m-primary-peripherals-color: #474a4d;
    --m-highlight-color: #F8CA41;
    --m-btn-hover-color: #F5F8FF;
    --m-menu-item-hover: #D9DFDF;

    --m-elastos-theme: #8530F1;
    --m-civic-theme-main-color: #FF6b4E;
    --torus-theme: #0364FF;
    --phantom-theme: #4C44C6;
 

    --m-primary-font-color: white;
    --m-primary-box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff; 

    --thin-border: 1px solid rgba(200,200,200,0.25);



    --secondary-blue: #E3EBEF;
    --primary-turquoise: #21B7B7;
    --fg-gray: #747F8B;

    /* EMOJI */
    /* unicode-emoji-picker { */
  
      /* font-size: 24px;
      z-index: 9999;
      background-color: white; */
    --min-width: 20.8em; /* 6 emojis wide */
    --min-height: 11.5em; /* 4 emojis tall */
    --max-width: 20.8em; /* 11 emojis wide */
    --max-height: 11.5em; /* 10 emojis tall */
    /* } */
    /* EMOJI */


  
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
    --nav-size: 65px;
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
    --clerk-font-family: "Roboto",Helvetica,Arial,sans-serif;
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
    font-size: 14px;
    /* font-family: "Baloo 2", cursive; */
    font-family: "Roboto",Helvetica,Arial,sans-serif;    

    overflow: hidden;
    /* font-family: 'Quicksand', sans-serif !important; */

  }

  body {
    font-family: var(--font-family) !important; 

  }

  .p-popover {
    border: 1px solid rgba(200,200,200,0.25);
    box-shadow: 0 15px 10px 0 rgb(81 82 81 / 32%);
    border-radius: 1rem;
  }

  .p-tabview-panels {
    display: flex;
    justify-content: center;
    padding: 0 !important;

  }

  .p-tabview-panel {
    width: 100%;
  }

  

  .p-virtualscroller-content::-webkit-scrollbar-thumb {
    display: none;
  }
  /* width */


 .p-scrollpanel-bar-y {
   background: var(--primary-color) !important;
 }

  ::-webkit-scrollbar {
    display: none;
  }

  .yt-lite {
    width: 90%;
    border-radius: 10px;
  }


  .rec-item-thumbnail {
    max-width: 90%;
    aspect-ratio: 16 / 9;
  }

  .tabview {
    width: 100%;
    @media screen and (max-width: 1250px) {
      max-width: 100%;
      width: 100%;
  
    }
    max-width: 25vw;
  }

  .p-blockui-container {
    width: 100%;
  }
  .p-button.p-button-icon-only {

    @media screen and (max-width: 576px) {
      width: 2.2rem;
      height: 2.2rem !important;
  
    }
  }

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* This will create a responsive grid */
    gap: 16px; /* Space between the cards */
    padding: 16px;
}

  .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
    box-shadow: none;
  }
  .p-inplace-display {
    display: flex;
    align-items: center;
  }
  .p-card-header img {
    width: unset;
  }
  .p-inputtext.p-invalid.p-component {
    box-shadow: 0 0 0 0.2rem #fa9898 !important;
  }
  .p-tooltip-arrow {
    border-top-color: white !important;
  }

  .p-tooltip-active {
    z-index: 9999999999999 !important;
    background: transparent !important;
  }

  .p-tooltip-text {
    /* padding: 0 !important; */
  }

  .p-float-label input:focus ~ label {
    top: -1rem !important;
  }

  .p-dialog-header {
    border-bottom: 1px solid lightgray !important;
  }
  .p-dialog-mask {
    z-index: 9999999999 !important;
  }
  .p-dropdown-panel {
    z-index: 99999999999 !important;
    margin-top: 2px !important;
  }

  .wallet-adapter-button-trigger {
    background-color: #56899e;
    background-image: linear-gradient(to right,var(--m-primary-background-color),#83af9b);
    /* box-shadow: #3c4fe0 0 3px 7px inset; */
    box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
    background-image: radial-gradient(100% 100% at 100% 0, var(--primary-color) 0, var(--primary-color) 100%);
    transition: all 5s;
    :hover {
      box-shadow: #3c4fe0 0 3px 7px inset;
    }
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

    @media (max-width: 600px) {
 
      -webkit-border-radius: 0px !important;
      -moz-border-radius: 0px !important;
      border-radius: 0px !important; 
    }
    

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
    min-height: 50vh;
    width: 100vw;
    max-width: 1000px;
    margin: 0;
    transform: translate(-50%, -50%) !important;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  body {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 0;
    margin: 0;
    font-family: var(--fontFamily);
    /* font-family: "Baloo 2", cursive; */
    font-family: var(--clerk-font-family);
    font-size: var(--fontSizeMd);
    line-height: var(--lineHeightMd);
  }
  
  #root {
    position: relative;
  }

  .wallet-adapter-modal.wallet-adapter-modal-fade-in {
    z-index: 99999999999 !important;

  }

  .wallet-adapter-dropdown-list-active {
    z-index: 999999 !important;
}


  .twitter-tweet {
    margin: 0 !important;
  }



 .editor-container {
  width: 100%;
 }


  .theme-tooltip {
    z-index: 999999999;
    pointer-events: none;
  }

  .popover {
    z-index: 9999999999999;
  }


  .popover {
    position: absolute;
    border: 1px solid rgba(200,200,200,0.25);
    box-shadow: 0 15px 10px 0 rgb(81 82 81 / 32%);
    border-radius: 1rem;
  }

  .feather {
    stroke: black;
    color: black;
  }


  /*********************************  CIVIC related stuff  ******************************** */

  .wallet-button {
    /* background-color: #FF6b4E; */
    transition: all 0.5s;

  }

  .wallet-button:hover {
    background-color: white !important;
    color: #FF6b4E;
    border: 1px solid #FF6b4E;
  }
  /*********************************  CIVIC related stuff  ******************************** */


  /*********************************  Toastify related stuff  ******************************** */

  .toasty {
    z-index: 9999999999999999999 !important;
    width: auto;
    min-width: 300px;
    div {
      white-space: pre-line !important;

    }
  }

  .toasty-error {
    width: 50vw;
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
