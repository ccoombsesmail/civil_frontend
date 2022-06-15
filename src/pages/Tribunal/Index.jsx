import React, {
  memo, useEffect, useMemo, useState,
} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  OuterContainer, InnerContainer,
  Header, StyledScalesSvg, ReportStatsContainer, ReportStatItem, VotingContainer,
  VotesAgainst, VotesFor, StyledPillarSvg, Timer,
} from './Style/index'
import TopicItem from '../Topics/components/TopicItem/Index'
import useBindDispatch from '../hooks/redux/useBindDispatch'

import topicActions from '../../redux/actions/topics/index'
import reportActions from '../../redux/actions/reports/index'
import tribunalCommentsActions from '../../redux/actions/tribunal_comments/index'
import commentActions from '../../redux/actions/comments/index'

import { CastBallotSvg } from '../../svgs/svgs'
import ThemeButton from '../CommonComponents/Button/Index'
import useOpenModal from '../hooks/useOpenModal'
import { TOPIC_VOTE_FORM } from '../App/Modal/Index'
import { calculateTimeLeft } from '../../generic/time/calculateTimeLeft'
import TribunalComments from './components/TribunalComments/Index'
import Comment from '../SubTopics/components/Comment/Index'
import { COMMENT, TOPIC } from '../../enums/content_type'

const Tribunal = () => {
  const { contentId, contentType } = useParams()
  const openModal = useOpenModal(TOPIC_VOTE_FORM, { contentId })
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
      <span key={String(idx)}>
        {timeLeft[interval]}
        {' '}
        {interval}
        {' '}
      </span>,
    )
  })
  const Content = useMemo(() => {
    const topic = topics?.find((t) => t.id === contentId)
    const comment = comments?.find((c) => c.data.id === contentId)
    if (topic) return <TopicItem key={topic.id} topic={topic} user={user} />
    if (comment) return <Comment commentData={comment.data} replies={comment.children} />
    return null
  }, [topics, comments, contentId])
  return (
    <OuterContainer>
      <Header>
        <StyledScalesSvg />
        <h1>
          Community Court
        </h1>
        <StyledScalesSvg />
      </Header>
      <Timer>
        <h4>
          Voting Period Timing Remaining
        </h4>
        {'\n'}
        <div>
          {timerComponents.length ? timerComponents : <span>Time Is Up!</span>}
        </div>
      </Timer>
      <InnerContainer>
        <StyledPillarSvg />
        {Content}
        <StyledPillarSvg />
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
      <TribunalComments comments={tribunalComments} />
    </OuterContainer>
  )
}

export default memo(Tribunal)
