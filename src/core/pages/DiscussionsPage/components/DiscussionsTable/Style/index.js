/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('div')` 
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(380px, 50vw, 1000px);
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);
  @media only screen and (max-width: 1250px) {
    width: 100vw;
  }

`

export const TableHeader = styled('header')` 
    height: clamp(175px, 15vh, 600px);
    background-image: linear-gradient(to right, var(--m-primary-background-color), #83af9b);
    background-image: linear-gradient(to bottom,var(--m-primary-background-color),#14B8A6) !important;

    color: #fff;
    position: relative;
    overflow: hidden;
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    svg {
      margin: clamp(10px, 2vw, 15px);
    }
    h1 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
      margin: 0;
      
      span {
        display: block;
        font-size: clamp(18px, 1.6vw, 30px);
        color: white;

      }
      
      span:first-child {
        font-weight: 700;
        letter-spacing: 6.5px;
      }
      
      span:last-child {
        font-weight: 500;
        letter-spacing: 3.55px;
        opacity: .85;
        transform: translateY(-2px);
 
      }
    }

    @media only screen and (max-width: 1250px) {
      width: 100vw
    }
    
`

