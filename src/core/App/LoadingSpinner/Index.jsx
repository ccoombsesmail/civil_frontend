import React from 'react'
import { useSelector } from 'react-redux'
import { CircleLoading } from '../../../svgs/spinners/CircleLoading'

import { Backdrop, InnerContainer } from './Style'

const LoadingSpinner = () => {
  const showSpinner = useSelector((s) => s.ui.loadingSpinner.isOpen)
  return (
    <>
      {
        showSpinner && (
        <Backdrop>
          {/* <CircleLoading /> */}
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
