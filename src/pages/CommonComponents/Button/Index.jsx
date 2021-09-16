/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { Button } from './Style'

const ThemeButton = ({ children, small, onClick }) => (
  <Button onClick={onClick} small={small}>
    {children}
  </Button>
)

export default ThemeButton
