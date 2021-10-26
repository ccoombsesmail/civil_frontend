import React from 'react'

import { ProgressBarContainer, ProgressValue } from './Style/index'

const ProgressBar = ({ value, maxValue }) => {
  console.log(value, maxValue)
  return (
    <ProgressBarContainer>
      <ProgressValue ratio={value / maxValue} />
    </ProgressBarContainer>
  )
}

export default ProgressBar
