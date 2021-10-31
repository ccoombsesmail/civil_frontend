import React from 'react'
import { useSelector } from 'react-redux'

import { Backdrop, InnerContainer } from './Style'

const LoadingSpinner = () => {
  const showSpinner = useSelector((s) => s.ui.loadingSpinner.isOpen)
  return (
    <>
      {
        showSpinner && (
        <Backdrop>
          <InnerContainer>
            <div className="dot-overtaking" />
          </InnerContainer>
        </Backdrop>
        )
      }
    </>
  )
}

export default LoadingSpinner
