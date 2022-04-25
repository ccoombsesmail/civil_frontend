import React, {
  memo, useEffect, useMemo, useState,
} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  OuterContainer, InnerContainer,
  Header, StyledScalesSvg, ReportStatsContainer, ReportStatItem, VotingContainer,
  VotesAgainst, VotesFor,
} from './Style/index'
import TopicItem from '../Topics/components/TopicItem/Index'
import useBindDispatch from '../hooks/redux/useBindDispatch'

import topicActions from '../../redux/actions/topics/index'
import topicReportActions from '../../redux/actions/topic_reports/index'
import { PillarSvg, CastBallotSvg } from '../../svgs/svgs'
import ThemeButton from '../CommonComponents/Button/Index'
import useOpenModal from '../hooks/useOpenModal'
import { TOPIC_VOTE_FORM } from '../App/Modal/Index'
import { calculateTimeLeft } from '../../generic/time/calculateTimeLeft'

const Tribunal = () => {
  const { topicId } = useParams()

  const openModal = useOpenModal(TOPIC_VOTE_FORM, { topicId })
  const user = useSelector((s) => s.session.currentUser)
  const topics = useSelector((s) => s.topics.list)
  const reportStats = useSelector((s) => s.topicReports)[topicId]
  const [timeLeft, setTimeLeft] = useState({})

  const { getTopic, getTopicReport } = useBindDispatch(topicActions, topicReportActions)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(reportStats.reportPeriodEnd))
    }, 1000)
    return () => clearTimeout(timer)
  })

  useEffect(() => {
    if (topicId && user) {
      getTopic(topicId, user.userId)
      getTopicReport(topicId)
    }
  }, [topicId, user])

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]}
        {' '}
        {interval}
        {' '}
      </span>,
    )
  })

  const Content = useMemo(() => {
    const topic = topics?.find((t) => t.id === topicId)
    if (topic) return <TopicItem topic={topic} user={user} />
    return null
  }, [topics, topicId])
  return (
    <OuterContainer>
      <Header>
        <StyledScalesSvg />
        <h1>
          Community Court
        </h1>
        <StyledScalesSvg />
      </Header>
      <div>
        {timerComponents.length ? timerComponents : <span>Time is up!</span>}
      </div>
      <InnerContainer>
        <PillarSvg />
        {Content}
        <PillarSvg />
      </InnerContainer>
      <VotingContainer>
        <VotesAgainst>
          Votes Against
          <span>
            ?
          </span>
        </VotesAgainst>
        <VotesFor>
          Votes For
          <span>
            ?
          </span>
        </VotesFor>
        <CastBallotSvg />
        <ThemeButton onClick={openModal}>
          Cast Your Vote
        </ThemeButton>
        { (reportStats?.voteAgainst || reportStats?.voteFor)
        && <span>You Have Already Voted</span>}
      </VotingContainer>
      <ReportStatsContainer>
        <ReportStatItem>
          <h2>Toxic Reports</h2>
          {reportStats && (reportStats.numToxicReports || 0)}
        </ReportStatItem>
        <ReportStatItem>
          <h2>Personal Attack Reports</h2>
          {reportStats && (reportStats.numPersonalAttackReports || 0)}
        </ReportStatItem>
        <ReportStatItem>
          <h2>Spam Reports</h2>
          {reportStats && (reportStats.numSpamReports || 0)}
        </ReportStatItem>
      </ReportStatsContainer>
    </OuterContainer>
  )
}

export default memo(Tribunal)
