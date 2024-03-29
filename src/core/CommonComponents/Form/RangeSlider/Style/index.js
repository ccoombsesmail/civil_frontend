/* eslint-disable no-tabs */

import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  /* border: 1px solid black; */
  height: clamp(20px, 2.5vw, 50px);
  width: clamp(200px, 10vw, 300px);
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Message = styled('div')`
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translate(-50%);
  font-weight: bold;
  font-size: clamp(10px, 1vw, 15px);
  white-space: nowrap;
`

export const Range = styled('div')`
  /* background: var(--m-primary-peripherals-color); */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* border-radius: 5rem; */
  box-shadow: 2px 5px 5px rgba(black, 0.3);

  .range-value {
    position: absolute;
    top: -50%;
  }
  .range-value span {
    width: 30px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background: var(--clerk-primary);
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 6px;
    background: ${({ sliderValue }) => {
    if (sliderValue < 0) return 'var(--m-danger-color)'
    if (sliderValue >= 0) return 'var(--primary-color)'
    return 'var(--primary-color)'
  }};
  }
  .range-value span:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid var(--clerk-primary);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    margin-top: -1px;
    
  }

  input[type="range"] {
    -webkit-appearance: none;
    margin: 20px 0;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    background: ${({ sliderValue }) => {
    if (sliderValue < 0) return 'var(--m-danger-color)'
    if (sliderValue >= 0) return 'var(--primary-color)'
    return 'var(--primary-color)'
  }};
    border-radius: 25px;
  }
  input[type="range"]::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 1);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
    background: ${({ sliderValue }) => {
    if (sliderValue < 0) return 'var(--m-danger-color)'
    if (sliderValue >= 0) return 'var(--primary-color)'
    return 'var(--primary-color)'
  }};
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: ${({ sliderValue }) => {
    if (sliderValue < 0) return 'var(--m-danger-color)'
    if (sliderValue >= 0) return 'var(--primary-color)'
    return 'var(--primary-color)'
  }};
  }
`
