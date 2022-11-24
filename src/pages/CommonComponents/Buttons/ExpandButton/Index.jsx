import React from 'react'
import { ButtonBackground, StyledButton, Container } from './Style'

const ExpandButton = ({
  children,
  backgroundColor,
  onClick,
  width,
  height,
  icon,
  margin,
}) => (
  <Container backgroundColor={backgroundColor} width={width} height={height} margin={margin}>
    <StyledButton backgroundColor={backgroundColor} onClick={onClick}>
      <ButtonBackground backgroundColor={backgroundColor} />
      {icon}
      <span>{children}</span>
    </StyledButton>
  </Container>
)
export default ExpandButton
