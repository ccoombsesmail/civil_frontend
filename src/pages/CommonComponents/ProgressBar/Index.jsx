import React from 'react'

import { ProgressBarContainer, ProgressValue } from './Style/index'

const ProgressBar = ({ value, maxValue }) => (
  <ProgressBarContainer>
    <ProgressValue ratio={value / maxValue} />
  </ProgressBarContainer>
)

export default ProgressBar
