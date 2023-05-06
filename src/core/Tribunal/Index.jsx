/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { memo, useMemo } from "react";
import { useParams } from "react-router-dom";

import {
  OuterContainer,
  InnerContainer,
  Header,
  StyledScalesSvg,
  ReportStatsContainer,
  ReportStatItem,
} from "./Style/index";

import TribunalComments from "./components/TribunalComments/Index";
import VotingBox from "./components/VotingBox/Index";

import Comment from "../pages/DiscussionsPage/components/Comment/Index";
import { COMMENT, TOPIC } from "../../enums/content_type";
import TopicItem from "../pages/HomePage/components/Topics/components/TopicItem/Index";
import { useGetReportQuery } from "../../api/services/reports.ts";
import useGetCurrentUser from "../App/hooks/useGetCurrentUser";
import { useGetTopicQuery } from "../../api/services/topics.ts";
import Timer from "./components/Timer/Index";
import { CircleLoading } from "../../svgs/spinners/CircleLoading";
import { useGetCommentQuery } from "../../api/services/comments.ts";
import { BgImage } from "../pages/Style";
import WhatDoYouThink from "./components/WhatDoYouThink/Index";

function Tribunal() {
  const { contentId, contentType } = useParams();
  const { currentUser } = useGetCurrentUser();
  const {
    data: topic,
    isLoading: isTopicLoading,
    isUninitialized: isTopicUninitialized,
    isSuccess: topicLoaded,
  } = useGetTopicQuery(contentId, {
    skip: !contentId || !currentUser || contentType !== TOPIC,
  });

  const {
    data: comment,
    isLoading: isCommentLoading,
    isUninitialized: isCommentUninitialized,
    isSuccess: commentLoaded,
  } = useGetCommentQuery(contentId, {
    skip: !contentId || !currentUser || contentType !== COMMENT,
  });


  
  const {
    data: reportStats,
    isLoading: isReportStatsLoading,
    isUninitialized: isReportStatsUninitialized,
    isSuccess,
    isFetching,
    refetch,
  } = useGetReportQuery(contentId, { skip: !contentId || !currentUser });

  const Content = useMemo(() => {
    if (topicLoaded) {
      return (
        <TopicItem
          key={topic.id}
          topic={topic}
          user={currentUser}
          hideCommentButton
        />
      );
    }
    if (commentLoaded) {
      return <Comment commentData={{ ...comment, isReportedComment: true}} replies={[]} isReportedComment />;
    }
    return null;
  }, [topic, comment, commentLoaded, topicLoaded, contentId, currentUser]);

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
      <InnerContainer>{Content}</InnerContainer>
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
      <WhatDoYouThink comment={{ ...comment, isReportedComment: true}} topic={topic} />
      <TribunalComments contentId={contentId} />
    </OuterContainer>
  );
}

export default memo(Tribunal);
