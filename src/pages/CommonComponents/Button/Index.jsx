/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { Button } from './Style'

const ThemeButton = ({
  children, small, onClick, width,
}) => (
  <Button onClick={onClick} small={small} width={width}>
    {children}
  </Button>
)

export default ThemeButton
