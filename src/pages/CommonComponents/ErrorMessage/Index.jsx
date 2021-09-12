/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { Container } from './Style'

const Error = ({ width, children }) => (
  <Container width={width}>
    <span>
      {children}
    </span>
  </Container>

)

export default Error
