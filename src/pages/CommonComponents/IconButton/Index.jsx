import React from 'react'

import { StyledButton } from './Style'

const IconButton = ({ icon, children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {icon}
      {children}
    </StyledButton>
  )
}

export default IconButton