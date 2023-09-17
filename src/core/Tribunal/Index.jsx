/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Divider } from 'primereact/divider'

import { Message } from 'primereact/message'
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace'
import {
  OuterContainer,
  InnerContainer,
  Header,
  ReportStatsContainer,
  ReportStatItem,
} from './Style/index'

import TribunalComments from './components/TribunalComments/Index'
import VotingBox from './components/VotingBox/Index'

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
import Comment from '../CommonComponents/InfiniteLoaders/ContentItems/CommentItem/CommentItem'
import { Gavel2, CastBallotSvg } from '../../svgs/svgs'
import ReportedUserDetails from './components/ReportedUserDetails/ReportedUserDetails'

function Tribunal() {
  const { contentId, contentType } = useParams()
  const { currentUser } = useGetCurrentUser()
  const {
    data: space,
    isLoading: isSpaceLoading,
    isUninitialized: isSpaceUninitialized,
    isSuccess: spaceLoaded,
  } = useGetSpaceQuery(contentId, {
    skip: !contentId || contentType !== SPACE,
  })

  const {
    data: discussion,
    isLoading: isDiscussionLoading,
    isUninitialized: isDiscussionUninitialized,
    isSuccess: discussionLoaded,
  } = useGetDiscussionQuery(contentId, {
    skip: !contentId || contentType !== DISCUSSION,
  })

  const {
    data: comment,
    isLoading: isCommentLoading,
    isUninitialized: isCommentUninitialized,
    isSuccess: commentLoaded,
  } = useGetCommentQuery(contentId, {
    skip: !contentId || contentType !== COMMENT,
  })

  const {
    data: reportStats,
    isLoading: isReportStatsLoading,
    isUninitialized: isReportStatsUninitialized,
    isSuccess,
    isFetching,
    refetch,
  } = useGetReportQuery(contentId, { skip: !contentId })

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

  const content = (
    <div className="flex align-items-center">
      <Gavel2 />
      <div className="mx-6">
        Content Is Under Review For The Following Violation(s)
      </div>
      <Gavel2 />
    </div>
  )

  const reportedUserId = useMemo(
    () => space?.createdByUserId || discussion?.createdByUserId || comment?.createdByUserId,
    [space, discussion, comment],
  )

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

      <ReportedUserDetails reportedUserId={reportedUserId} />

      <ReportStatsContainer>
        <Message
          style={{
            border: '1px solid red',
            borderWidth: '0 6px 0 6px',
            color: 'black',
          }}
          className="justify-content-center w-full mb-2"
          severity="error"
          content={(
            <div>
              Report Violation Level –
              {' '}
              <b>
                {reportStats?.reportSeverityLevel}
              </b>
            </div>
          )}
        />
        <Message
          style={{
            border: '1px solid #696cff',
            borderWidth: '0 6px 0 6px',
            color: 'black',
          }}
          className="w-full justify-content-center"
          severity="info"
          content={content}
        />
        <div className="flex justify-content-center">

          {
          Object.entries(reportStats?.reportsByCauseUnderReviewMap || {}).map(([cause, count]) => (
            <ReportStatItem>
              <h2>{cause}</h2>
              <span>{count || 0}</span>
            </ReportStatItem>
          ))
         }
        </div>
        <Inplace className="w-11 flex justify-content-center">
          <InplaceDisplay>See Other Reports</InplaceDisplay>
          <InplaceContent>
            <Divider align="center">
              <b className="divider-text">Other Reports</b>
            </Divider>
            <div className="flex flex-wrap justify-content-center w-full">

              {
              Object.entries(reportStats?.reportsByCauseNotUnderReviewMap || {}).map(([cause, count]) => (
                <ReportStatItem className="w-2">
                  <h2>{cause}</h2>
                  <span>{count || 0}</span>
                </ReportStatItem>
              ))
              }
            </div>
          </InplaceContent>
        </Inplace>
      </ReportStatsContainer>
      {isSuccess && (
        <VotingBox contentId={contentId} reportStats={reportStats} isFetching={isFetching} />
      )}

      <WhatDoYouThink comment={{ ...comment, isReportedComment: true}} space={space} discussion={discussion} />
      <TribunalComments contentId={contentId} reportStats={reportStats} />
    </OuterContainer>
  )
}

export default memo(Tribunal)
