import React, {
  memo, useEffect, useMemo, useState,
} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  OuterContainer, InnerContainer,
  Header, StyledScalesSvg, ReportStatsContainer, ReportStatItem,
  StyledPillarSvg, Timer,
} from './Style/index'
import useBindDispatch from '../hooks/redux/useBindDispatch'

import topicActions from '../../redux/actions/topics/index'
import reportActions from '../../redux/actions/reports/index'
import tribunalCommentsActions from '../../redux/actions/tribunal_comments/index'
import commentActions from '../../redux/actions/comments/index'

import { calculateTimeLeft } from '../../generic/time/calculateTimeLeft'
import TribunalComments from './components/TribunalComments/Index'
import VotingBox from './components/VotingBox/Index'

import Comment from '../MainContent/components/SubTopicsPage/components/Comment/Index'
import { COMMENT, TOPIC } from '../../enums/content_type'
import TopicItem from '../MainContent/components/HomePage/components/Topics/components/TopicItem/Index'

const Tribunal = () => {
  const { contentId, contentType } = useParams()
  const user = useSelector((s) => s.session.currentUser)
  const topics = useSelector((s) => s.topics.list)
  const comments = useSelector((s) => s.comments.list)
  const tribunalComments = useSelector((s) => s.tribunalComments)
  const reportStats = useSelector((s) => s.reports)[contentId]
  const [timeLeft, setTimeLeft] = useState({})

  const {
    getTopic,
    getReport,
    getAllTribunalCommentsBatch,
    getComment,
  } = useBindDispatch(topicActions, reportActions, tribunalCommentsActions, commentActions)

  useEffect(() => {
    let timer
    if (reportStats) {
      timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(reportStats.reportPeriodEnd))
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [reportStats])

  useEffect(() => {
    if (contentId && user) {
      if (contentType === COMMENT) getComment(contentId)
      if (contentType === TOPIC) getTopic(contentId, user.id)
      getReport(contentId)
      getAllTribunalCommentsBatch(contentId)
    }
  }, [contentId, user])

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, idx) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span key={String(`${idx}0`)}>
        {timeLeft[interval]}
        {' '}
        {interval}
        {' '}
      </span>,
    )
  })

  const votingTimeUp = timerComponents.length === 0

  const Content = useMemo(() => {
    const topic = topics?.find((t) => t.id === contentId)
    const comment = comments?.find((c) => c.data.id === contentId)
    if (topic) return <TopicItem key={topic.id} topic={topic} user={user} />
    if (comment) return <Comment commentData={comment.data} replies={comment.children} />
    return null
  }, [topics, comments, contentId])
  return (
    <OuterContainer id="tribunal-container">
      <Header>
        <StyledScalesSvg />
        <h1>
          Community Court
        </h1>
        <StyledScalesSvg />
      </Header>
      <Timer>
        <h4>
          { reportStats?.reportPeriodEnd ? 'Voting Period Timing Remaining' : 'Voting Has Ended' }
        </h4>
        {'\n'}
        <div>
          {(!Object.keys(timeLeft) && reportStats) ? <span>Time Is Up!</span> : timerComponents}
        </div>
      </Timer>
      <InnerContainer>
        <StyledPillarSvg />
        {Content}
        <StyledPillarSvg />
      </InnerContainer>
      {reportStats && (
      <VotingBox
        contentId={contentId}
        reportStats={reportStats}
        votingTimeUp={votingTimeUp}
      />
      )}
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
      <TribunalComments comments={tribunalComments} />
    </OuterContainer>
  )
}

export default memo(Tribunal)
