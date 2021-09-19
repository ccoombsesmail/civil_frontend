import React from 'react'

import { StyledButton } from './Style'

const IconButton = ({ icon, children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {icon}
      {children}
    </StyledButton>
  )
}

export default IconButton