/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import { Container, Input } from './Style/index'

const AnimatedCheckmark = ({ toxicityScore }) => {
  let color
  let text
  if (toxicityScore < 0.5) { color = 'green'; text = 'Great!' }
  if (toxicityScore >= 0.6 && toxicityScore <= 0.9) { color = 'var(--m-danger-color)'; text = 'You are OK but getting close' }
  if (toxicityScore > 0.9) { color = 'red'; text = 'You are being toxic' }
  return (
    <>
      <Container color={color}>
        <Input readOnly disabled checked={Boolean(toxicityScore)} type="checkbox" />
        <label />
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
          <path d="M2 8.36364L6.23077 12L13 2" />
        </svg>
      </Container>
      {toxicityScore && <span style={{ marginLeft: '0.5vw' }}>{text}</span>}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  )
}
export default AnimatedCheckmark
