import styled from 'styled-components'

export const SignInContainer = styled('div')`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid rgba(200,200,200,0.25);
  box-shadow: 0 15px 10px 0 rgb(81 82 81 / 32%);
  border-radius: 10px;
  padding: 1.5vw;
  height: 100vh;
  overflow-y: scroll;

  background-color: white;
  
  width: 50vw;

  .cl-signIn-start {
    width: 40vw;
  }

  .tab-content {
    padding: 4vw 1vw 2vw 1vw;
    
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 1600px) {
    width: 65vw;
  }

  @media only screen and (max-width: 1200px) {
    width: 75vw;
  }


  @media only screen and (max-width: 800px) {
    width: 90vw;
  }

    @media only screen and (max-width: 600px) {
      width: 95vw;
  }



`

export const IconNavButton = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  :hover {
    filter: brightness(.9);
  }

`
export const DIDSignInContainer = styled('div')` 
  margin-top: 5vh !important;
`

export const DIDHeader = styled('h1')`
  display: flex;
  align-items: center;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  font-size: 3rem;
  line-height: 3rem;
  height: 3rem;
  color: var(--m-elastos-theme);
  font-weight: 600;
  position: relative;
`
export const CreateDidButton = styled('button')`
  width: 100%;
  color: white;
  background-color: var(--m-elastos-theme);
  height: 4vh;
  margin-bottom: 2vh !important;
  font-size: .8vw !important;
  outline: none;
  border: none;
  font-weight: bold;
  border-radius: 0.5em;
  
`

export const IconLink = styled('a')`
  margin-left: 2vw;
  position: absolute;
  right: 0;
  transform: translate(140%);
`

export const ElastosIcon = styled('img')` 
  width: 3vw;
  height: 3vw;

  @media only screen and (max-width: 800px) {
    width: 7vw;
    height: 7vw;
  }

`

export const FlexDiv = styled('div')` 
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3vh !important;

`

export const Footer = styled('footer')`
  /* margin-top: 2vw; */
  display: flex !important;
  width: 100%;
  justify-content: center;
  color: var(--clerk-font-color, #151515);
  span {
    opacity: .3;
    font-size: 1rem;
  }
`
