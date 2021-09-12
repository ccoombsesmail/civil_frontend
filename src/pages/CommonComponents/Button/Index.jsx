/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { Button } from './Style'

const ThemeButton = ({ children, onClick }) => (
  <Button onClick={onClick}>
    {children}
  </Button>
)

export default ThemeButton
