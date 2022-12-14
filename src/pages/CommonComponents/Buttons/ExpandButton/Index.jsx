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
  type
}) => (
  <Container backgroundColor={backgroundColor} width={width} height={height} margin={margin}>
    <StyledButton backgroundColor={backgroundColor} onClick={onClick} type={type}>
      <ButtonBackground backgroundColor={backgroundColor} />
      {icon}
      <span>{children}</span>
    </StyledButton>
  </Container>
)
export default ExpandButton
