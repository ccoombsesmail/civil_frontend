import React from 'react'
import { ButtonBackground, StyledButton, Container } from './Style'

const ExpandButton = ({
  children,
  backgroundColor,
  onClick,
  width,
  height,
}) => (
  <Container backgroundColor={backgroundColor} width={width} height={height}>
    <StyledButton backgroundColor={backgroundColor} onClick={onClick}>
      <ButtonBackground backgroundColor={backgroundColor} />
      <span>{children}</span>
    </StyledButton>
  </Container>
)
export default ExpandButton
