/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { Button } from './Style'

const ThemeButton = ({
  children, small, onClick, width, type, disabled, height, backgroundColor,
}) => (
  <Button
    onClick={onClick}
    small={small}
    width={width}
    height={height}
    type={type}
    disabled={disabled}
    backgroundColor={backgroundColor}
  >
    {children}
  </Button>
)

export default ThemeButton
