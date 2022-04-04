/* eslint-disable max-len */
import React from 'react'
import { Container, SvgContainerTop, SvgContainerBottom } from './Style'

const colors = {
  green: '#83af9b',
  red: '#B9314F',
  blue: '#14213D',
  beige: '#ece5ce',
}

const WavyBackground = ({ color, top }) => {
  const fillColor = colors[color] ? colors[color] : color
  return (
    <Container top={top}>
      <SvgContainerTop>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 109.53571428571428,145.71428571428572 219.07142857142856,158.42857142857142 344,153 C 468.92857142857144,147.57142857142858 609.25,124.00000000000001 738,110 C 866.75,95.99999999999999 983.9285714285716,91.57142857142858 1099,97 C 1214.0714285714284,102.42857142857142 1327.0357142857142,117.71428571428571 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--m-secondary-background-color)"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          />
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 113.75,253.60714285714286 227.5,241.21428571428572 349,244 C 470.5,246.78571428571428 599.7499999999999,264.75 737,260 C 874.2500000000001,255.25 1019.5000000000002,227.7857142857143 1138,225 C 1256.4999999999998,222.2142857142857 1348.25,244.10714285714283 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--m-primary-background-color)"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          />
        </svg>
      </SvgContainerTop>
      <SvgContainerBottom>

        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 109.53571428571428,145.71428571428572 219.07142857142856,158.42857142857142 344,153 C 468.92857142857144,147.57142857142858 609.25,124.00000000000001 738,110 C 866.75,95.99999999999999 983.9285714285716,91.57142857142858 1099,97 C 1214.0714285714284,102.42857142857142 1327.0357142857142,117.71428571428571 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--m-secondary-background-color)"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          />
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 113.75,253.60714285714286 227.5,241.21428571428572 349,244 C 470.5,246.78571428571428 599.7499999999999,264.75 737,260 C 874.2500000000001,255.25 1019.5000000000002,227.7857142857143 1138,225 C 1256.4999999999998,222.2142857142857 1348.25,244.10714285714283 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--m-primary-background-color)"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          />
        </svg>
      </SvgContainerBottom>
    </Container>
  )
}

export default WavyBackground
