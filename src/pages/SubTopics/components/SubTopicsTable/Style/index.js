/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled('div')` 

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);


`

export const TableHeader = styled('header')` 
    height: 10vh;
    background-image: linear-gradient(to right, var(--m-primary-background-color), #83af9b);
    color: #fff;
    position: relative;
    /* border-radius: 12px 12px 0 0; */
    overflow: hidden;
    width: 100%;
    /* border-radius: 12px; */
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
      }
      
      span:first-child {
        font-size: 1.5vw;
        font-weight: 700;
        letter-spacing: 6.5px;
      }
      
      span:last-child {
        font-size: .8vw;
        font-weight: 500;
        letter-spacing: 3.55px;
        opacity: .85;
        transform: translateY(-2px);
      }
    }
    
    .leaderboard__icon {
      fill: #fff;
      opacity: .35;
      width: 50px;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
`

export const Table = styled('table')` 
  border-radius: 0 0 12px 12px;
  padding: 15px 15px 20px;
  display: grid;
  row-gap: 8px;
  width: 100%;
  
`

export const ColHeader = styled('tr')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 10px 30px 10px 10px;
  background-color: var(--bg-accent);
  border-radius: .5vw;

`

export const ColItem = styled('th')`
  color: white;
  font-weight: bold;
  letter-spacing: .1vw;
  font-size: 20px;


`

export const Row = styled('tr')` 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    padding: 10px 30px 10px 10px;
    overflow: hidden;
    border-radius: .5vw;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    cursor: pointer;
    transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);
    background-color: #fff;
    z-index: 999999999;
    
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    }
  
  /* &__picture {
    max-width: 100%;
    width: 60px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
  } */
  
`

export const RowItem = styled('td')` 
  /* opacity: .8; */
  font-weight: 600;
  color: #979cb0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .1vw;    

`
