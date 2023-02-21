import React from 'react'

import { ProgressBarContainer, InnerProgressContainer, MiddleOfCircleContainer } from './Style/index'

function ProgressBar({ userLevelData }) {
  const { exp, level, pointsForNextLevel } = userLevelData || {}
  const ratio = exp / (pointsForNextLevel)
  if (Number.isNaN(ratio)) return null
  return (
    <ProgressBarContainer>
      <h1>
        Level:
        {' '}
        {level}
      </h1>
      <InnerProgressContainer ratio={ratio * 100}>
        <svg>
          <circle cx="70" cy="70" r="70" />
          <circle cx="70" cy="70" r="70" />
        </svg>
        <MiddleOfCircleContainer>
          <h2>
            {Number(ratio * 100).toFixed(2)}
            <span>%</span>
          </h2>
        </MiddleOfCircleContainer>
      </InnerProgressContainer>
      <h2>Progress Until Next Level</h2>
      <h3>{`${exp.toFixed(2)}/${(pointsForNextLevel).toFixed(2)}`}</h3>
    </ProgressBarContainer>
  )
}

export default ProgressBar
