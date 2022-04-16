/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { CircleLoading } from '../svgs/spinners/CircleLoading';

const IsLoadingHOC = (WrappedComponent, size = '150px', noBackground = false) => {
  const HOC = (props) => {
    const [isLoading, setIsLoading] = useState(true)

    const setLoadingState = (loadingState) => {
      setIsLoading(loadingState)
    }
    return (
      <>
        {isLoading && <CircleLoading size={size} noBackground={noBackground} />}
        <WrappedComponent {...props} setIsLoading={setLoadingState} />
      </>
    )
  }
  return HOC
}

export default IsLoadingHOC
