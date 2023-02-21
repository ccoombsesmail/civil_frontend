/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react'

import { StyledButton } from './Style'

function IconButton({
  icon, children, onClick, disabled, rest,
}) {
  const onClickHandler = useCallback((e) => {
    e.stopPropagation()
    onClick()
  }, [onClick])

  return (
    <StyledButton {...rest} onClick={onClickHandler} disabled={disabled}>
      {icon}
      {children}
    </StyledButton>
  )
}

export default IconButton
