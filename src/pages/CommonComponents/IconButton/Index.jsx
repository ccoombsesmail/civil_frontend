import React, {useCallback} from 'react'

import { StyledButton } from './Style'

const IconButton = ({ icon, children, onClick, disabled }) => {
  
  const onClickHandler = useCallback((e) => {
    e.stopPropagation()
    onClick()
  }, [onClick])

  return (
    <StyledButton onClick={onClickHandler} disabled={disabled}>
      {icon}
      {children}
    </StyledButton>
  )
}

export default IconButton