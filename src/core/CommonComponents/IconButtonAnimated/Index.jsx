/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react'

import { StyledButton, ButtonText, IconContainer } from './Style/index'

const AnimatedIconButton = ({
  Icon, onClick, disabled, buttonText, hidden,
}) => {
  const onClickHandler = useCallback((e) => {
    e.stopPropagation()
    onClick()
  }, [onClick])

  return (
    <StyledButton type="button" onClick={onClickHandler} disabled={disabled} hidden={hidden}>
      <ButtonText>{buttonText}</ButtonText>
      <IconContainer>
        <Icon />
      </IconContainer>
    </StyledButton>
  )
}

export default AnimatedIconButton
