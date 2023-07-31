/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import {
  OuterContainer,
  InnerContainer,
  Header,
  StyledScalesSvg,
  ReportStatsContainer,
  ReportStatItem,
} from './Style/index'

import TribunalComments from './components/TribunalComments/Index'
import VotingBox from './components/VotingBox/Index'

import Comment from '../pages/DiscussionsPage/components/Comment/Index'
import { COMMENT, DISCUSSION, SPACE } from '../../enums/content_type'
import SpaceItem from '../pages/HomePage/components/Spaces/components/SpaceItem/Index'
import { useGetReportQuery } from '../../api/services/reports.ts'
import useGetCurrentUser from '../App/hooks/useGetCurrentUser'
import { useGetSpaceQuery } from '../../api/services/spaces.ts'
import Timer from './components/Timer/Index'
import { CircleLoading } from '../../svgs/spinners/CircleLoading'
import { useGetCommentQuery } from '../../api/services/comments.ts'
import { BgImage } from '../pages/Style'
import WhatDoYouThink from './components/WhatDoYouThink/WhatDoYouThink'
import { useGetDiscussionQuery } from '../../api/services/discussions.ts'
import { DiscussionItem } from '../pages/DiscussionsPage/components/DiscussionsFeed/components/CardFeedItem/CardFeedItem'

function Tribunal() {
  const { contentId, contentType } = useParams()
  const { currentUser } = useGetCurrentUser()
  const {
    data: space,
    isLoading: isSpaceLoading,
    isUninitialized: isSpaceUninitialized,
    isSuccess: spaceLoaded,
  } = useGetSpaceQuery(contentId, {
    skip: !contentId || !currentUser || contentType !== SPACE,
  })

  const {
    data: discussion,
    isLoading: isDiscussionLoading,
    isUninitialized: isDiscussionUninitialized,
    isSuccess: discussionLoaded,
  } = useGetDiscussionQuery(contentId, {
    skip: !contentId || !currentUser || contentType !== DISCUSSION,
  })

  const {
    data: comment,
    isLoading: isCommentLoading,
    isUninitialized: isCommentUninitialized,
    isSuccess: commentLoaded,
  } = useGetCommentQuery(contentId, {
    skip: !contentId || !currentUser || contentType !== COMMENT,
  })

  const {
    data: reportStats,
    isLoading: isReportStatsLoading,
    isUninitialized: isReportStatsUninitialized,
    isSuccess,
    isFetching,
    refetch,
  } = useGetReportQuery(contentId, { skip: !contentId || !currentUser })

  const Content = useMemo(() => {
    if (spaceLoaded) {
      return (
        <SpaceItem
          key={space.id}
          space={space}
          user={currentUser}
          hideCommentButton
        />
      )
    }
    if (commentLoaded) {
      return <Comment commentData={{ ...comment, isReportedComment: true}} replies={[]} isReportedComment />
    }
    if (discussionLoaded) {
      return <DiscussionItem discussion={discussion} id={discussion.id} isReportedComment />
    }
    return null
  }, [space, comment, discussion, commentLoaded, spaceLoaded, contentId, currentUser])

  const isContentLoading = isCommentLoading || isDiscussionLoading || isSpaceLoading

  return (
    <OuterContainer id="tribunal-container">
      <BgImage />
      <Header>
        <img
          src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png"
          alt=""
        />
        <h1 style={{color: 'darkolivegreen'}}>Community Tribunal</h1>
        <img
          src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/olive2.png"
          alt=""
        />
      </Header>
      {isReportStatsUninitialized ? null : isReportStatsLoading ? (
        <CircleLoading size="10vw" />
      ) : (
        <Timer reportStats={reportStats} refetch={refetch} />
      )}
      <InnerContainer>
        { isContentLoading ? <CircleLoading size="10vw" /> : Content}
      </InnerContainer>
      {isSuccess && (
        <VotingBox contentId={contentId} reportStats={reportStats} isFetching={isFetching} />
      )}
      {isReportStatsUninitialized ? null : (
        <ReportStatsContainer>
          <ReportStatItem>
            <h2>Toxic Reports</h2>
            {isSuccess && <span>{reportStats.numToxicReports || 0}</span>}
          </ReportStatItem>
          <ReportStatItem>
            <h2>Personal Attack Reports</h2>
            {isSuccess && (
              <span>{reportStats.numPersonalAttackReports || 0}</span>
            )}
          </ReportStatItem>
          <ReportStatItem>
            <h2>Spam Reports</h2>
            {isSuccess && <span>{reportStats.numSpamReports || 0}</span>}
          </ReportStatItem>
        </ReportStatsContainer>
      )}
      <WhatDoYouThink comment={{ ...comment, isReportedComment: true}} space={space} discussion={discussion} />
      <TribunalComments contentId={contentId} reportStats={reportStats} />
    </OuterContainer>
  )
}

export default memo(Tribunal)
