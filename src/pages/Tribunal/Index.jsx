import React, {
  memo, useContext, useEffect, useMemo, useState,
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
import { useGetCurrentUserQueryState } from '../../api/services/session'
import { UserContext } from '../App/Index'
import { useGetReportQuery } from '../../api/services/reports'
import useGetCurrentUser from '../App/hooks/useGetCurrentUser'
import { useGetTopicQuery } from '../../api/services/topics'
import { useWallet } from '@solana/wallet-adapter-react'

const Tribunal = () => {
  const { contentId, contentType } = useParams()
  const { currentUser} = useGetCurrentUser()
  const wallet = useWallet()
  console.log(wallet)
  const topics = useSelector((s) => s.topics.list)
  // const comments = useSelector((s) => s.comments.list)
  const tribunalComments = useSelector((s) => s.tribunalComments)
  const [timeLeft, setTimeLeft] = useState({})
  const { data: topic, isLoading: isTopicLoading, isUninitialized: isTopicUninitialized } = useGetTopicQuery(contentId, { skip: !contentId || !currentUser})

  const {
    getAllTribunalCommentsBatch,
    getComment,
  } = useBindDispatch(reportActions, tribunalCommentsActions, commentActions)
  const { data: reportStats, isLoading, isUninitialized, isSuccess } = useGetReportQuery(contentId, {skip: !contentId || !currentUser})
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
    if (contentId && currentUser) {
      // if (contentType === COMMENT) getComment(contentId)
      // if (contentType === TOPIC) getTopic(contentId, currentUser.id)
      // getAllTribunalCommentsBatch(contentId)
    }
  }, [contentId, currentUser])

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
    if (isTopicLoading || isTopicUninitialized) return null
    // const comment = comments?.find((c) => c.data.id === contentId)
    if (topic) return <TopicItem key={topic.id} topic={topic} user={currentUser} />
    // if (comment) return <Comment commentData={comment.data} replies={comment.children} />
    return null
  }, [topic, contentId])
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
      {isSuccess && (
      <VotingBox
        contentId={contentId}
        reportStats={reportStats}
        votingTimeUp={votingTimeUp}
      />
      )}
     { isUninitialized ? null : (<ReportStatsContainer>
        <ReportStatItem>
          <h2>Toxic Reports</h2>
          {isSuccess && (reportStats.numToxicReports || 0)}
        </ReportStatItem>
        <ReportStatItem>
          <h2>Personal Attack Reports</h2>
          {isSuccess && (reportStats.numPersonalAttackReports || 0)}
        </ReportStatItem>
        <ReportStatItem>
          <h2>Spam Reports</h2>
          {isSuccess && (reportStats.numSpamReports || 0)}
        </ReportStatItem>
      </ReportStatsContainer>
      )}
      {/* <TribunalComments comments={tribunalComments} /> */}
    </OuterContainer>
  )
}

export default memo(Tribunal)
