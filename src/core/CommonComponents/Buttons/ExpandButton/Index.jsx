import React from 'react'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'
import { ButtonBackground, StyledButton, Container } from './Style'

function ExpandButton({
  children,
  bgColor,
  onClick,
  width,
  height,
  icon,
  margin,
  type,
  civicButton,
  iconButton,
  disabled,
}) {
  return (
    <Container backgroundColor={bgColor} width={width} height={height} margin={margin}>
      { disabled ? <CircleLoading size={5} />
        : (
          <StyledButton backgroundColor={bgColor} onClick={onClick} type={type} iconButton={iconButton} disabled={disabled}>
            <ButtonBackground backgroundColor={bgColor} civicButton={civicButton} />
            {icon}
            <span>{children}</span>
          </StyledButton>
        )}
    </Container>
  )
}
export default ExpandButton
