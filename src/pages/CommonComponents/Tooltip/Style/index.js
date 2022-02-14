/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const LightButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .2vw;
  background: transparent !important;
  border: none;
`

export const TooltipContent = styled('div')`
  font-size: .6vw;

`
