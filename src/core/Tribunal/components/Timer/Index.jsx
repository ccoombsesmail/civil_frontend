import React, {
  memo, useEffect, useState,
} from 'react'

import {
  Container, TimeItem, Headline,
} from './Style/index'

import { calculateTimeLeft } from '../../../../generic/time/calculateTimeLeft'

function Timer({ reportStats, refetch }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(reportStats.reportPeriodEnd).timeLeft)
  useEffect(() => {
    const timer = setInterval(() => {
      const { timeLeft: calculatedTimeLeft, reportPeriodEnded } = calculateTimeLeft(reportStats.reportPeriodEnd)
      setTimeLeft(calculatedTimeLeft)
      if (reportPeriodEnded) {
        refetch()
        clearTimeout(timer)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [reportStats])

  return (
    <Container>
      <Headline>
        { +new Date(reportStats?.reportPeriodEnd) - +new Date() > 0 ? 'Voting Period Time Remaining' : 'Voting Has Ended' }
      </Headline>
      {'\n'}
      <ul>
        <TimeItem>
          <span id="days">{timeLeft.days}</span>
          Days
        </TimeItem>
        <TimeItem>
          <span id="hours">{timeLeft.hours}</span>
          Hours
        </TimeItem>
        <TimeItem>
          <span id="minutes">{timeLeft.minutes}</span>
          Minutes
        </TimeItem>
        <TimeItem>
          <span id="seconds">{timeLeft.seconds}</span>
          Seconds
        </TimeItem>
      </ul>
    </Container>
  )
}

export default memo(Timer)
