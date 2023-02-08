import React from 'react'
import {
  LeftIcon, RightIcon, Block, Container,
} from './Style'

const RevealButton = ({
  children,
  backgroundColor,
  onClick,
  width,
  height,
  size,
  Icon,
  margin,
}) => (
  <Container backgroundColor={backgroundColor} width={width} height={height} margin={margin} onClick={onClick}>
    {children}
    <Block size={size}>
      <LeftIcon>
        <Icon />
      </LeftIcon>
      <RightIcon>
        <Icon />
      </RightIcon>
    </Block>
  </Container>
)
export default RevealButton
