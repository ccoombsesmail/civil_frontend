/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { VerticalLine, LineWithTextOverlayContainer, TextOverlay } from './Style'

const LineWithOverlayText = ({ children }) => (
  <LineWithTextOverlayContainer>
    <VerticalLine />
    <TextOverlay>{children}</TextOverlay>
  </LineWithTextOverlayContainer>

)

export default LineWithOverlayText
