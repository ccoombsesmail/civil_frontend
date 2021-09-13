import React from 'react'

import { StyledButton } from './Style'

const IconButton = ({ icon, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {icon}
    </StyledButton>
  )
}

export default IconButton