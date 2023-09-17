import styled from 'styled-components'

export const BorderContainer = styled('div')`
  border: 1px solid rgba(200,200,200,0.25);
  border-top: none;
  z-index: 9999;
  width: 100%;
  background-color: white;
  min-height: calc(100vh - var(--nav-size));
  /* width: 50vw; */
  @media (max-width: 1250px) {
    width: 100vw;
  }

`

export const NotificationList = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  padding-bottom: 30vh;
  background-color: #F0F2F5;
  background-color: white;

`

export const GridContainer = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 10vw; */

 @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100vw;
    margin-left: 0;
  }
`

export const Container = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const Header = styled('header')` 
  width: 100%;
  background: #f8f9fa;
  border: 1px solid rgba(200,200,200,0.25);
  padding: 2vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 128px;

  p {
    margin: 0 1vw;
    font-size: 1.1vw;
    display: flex;
    align-items: center;
  }
`
