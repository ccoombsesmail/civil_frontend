/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { Button, Button2 } from './Style'

const ThemeButton = ({
  children, small, onClick, width, type, disabled, height, backgroundColor, hidden,
}) => (
  <Button
    hidden={hidden}
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

export const ThemeButton2 = ({
  children, small, onClick, width, type, disabled, height, backgroundColor, hidden,
}) => (
  <Button2
    hidden={hidden}
    onClick={onClick}
    small={small}
    width={width}
    height={height}
    type={type}
    disabled={disabled}
    backgroundColor={backgroundColor}
  >
    {children}
  </Button2>
)

export default ThemeButton
