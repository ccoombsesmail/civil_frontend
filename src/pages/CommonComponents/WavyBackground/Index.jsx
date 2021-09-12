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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={`${fillColor}`}
            fillOpacity="1"
            d="M0,192L34.3,170.7C68.6,149,137,107,206,117.3C274.3,128,343,192,411,186.7C480,181,549,107,617,112C685.7,117,754,203,823,224C891.4,245,960,203,1029,181.3C1097.1,160,1166,160,1234,144C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
      </SvgContainerTop>
      <SvgContainerBottom>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={`${fillColor}`} fillOpacity="1" d="M0,192L34.3,170.7C68.6,149,137,107,206,117.3C274.3,128,343,192,411,186.7C480,181,549,107,617,112C685.7,117,754,203,823,224C891.4,245,960,203,1029,181.3C1097.1,160,1166,160,1234,144C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
        </svg>
      </SvgContainerBottom>
    </Container>
  )
}

export default WavyBackground
