/* eslint-disable no-unused-vars */
import React, { useState, memo, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import useCategorizeComments from "../hooks/useCategorizeComments";
import {
  TabNav,
  Glider,
} from "../../../../CommonComponents/NonBootstrapTabs/Style";
import TabContent from "../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index";
import TabNavItem from "../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index";
import CommentColumn from "../CommentColumn/Index";
import { ColumnContainer, ThreadContainer, ListContainer } from "./Style/index";
import useGetCurrentUser from "../../../../App/hooks/useGetCurrentUser";
import { useGetDiscussionQuery } from "../../../../../api/services/discussions.ts";
import { useGetAllCommentsQuery } from "../../../../../api/services/comments.ts";
import InfiniteLoader from "./InfiniteLoader";
import { CircleLoading } from "../../../../../svgs/spinners/CircleLoading";

const ITEMS_PER_PAGE = 10;

function DiscussionThread() {
  const { topicId, discussionId } = useParams();
  const [key, setKey] = useState(0);
  const { currentUser } = useGetCurrentUser();
  const [currentPage, setCurrentPage] = useState(0);
  const [allData, setAllData] = useState([]);

  const {
    data: discussion,
    isLoading: isDiscussionLoading,
    isUninitialized: isDiscussionUninitialized,
  } = useGetDiscussionQuery(discussionId, {
    skip: !currentUser || !discussionId,
  });

  const {
    data: comments,
    isUninitialized: isCurrentUninitialized,
    isLoading: isLoadingCurrent,
  } = useGetAllCommentsQuery(
    { discussionId, currentPage },
    {
      skip: !currentUser || !discussionId,
    }
  );

  const categorizedComments = useCategorizeComments(comments);
  const {
    POSITIVE: positiveComments,
    NEUTRAL: neutralComments,
    NEGATIVE: negativeComments,
    all: allComments,
  } = categorizedComments || {};

  useEffect(() => {
    if (comments) {
      setAllData([...allData, ...comments]);
    }
  }, [comments]);
  
  const fetchMore = useCallback(() => {
    Promise.resolve(setCurrentPage((prevPage) => prevPage + 1));
  }, []);

  return (
    <ThreadContainer>
      {/* <TabNav>
        <TabNavItem title="All" id={0} activeTab={key} setActiveTab={setKey} contentCount={comments?.length} />
        <TabNavItem title="Positive" id={1} activeTab={key} setActiveTab={setKey} contentCount={positiveComments?.length} />
        <TabNavItem title="Neutral" id={2} activeTab={key} setActiveTab={setKey} contentCount={neutralComments?.length} />
        <TabNavItem title="Negative" id={3} activeTab={key} setActiveTab={setKey} contentCount={negativeComments?.length} />

        <Glider className="glider" />
      </TabNav> */}

      {/* <TabContent id={0} activeTab={key}> */}
      <ColumnContainer>
        <ListContainer>
          <h1>{"Comments"}</h1>
          {isCurrentUninitialized || isLoadingCurrent ? (
            <CircleLoading size={30} />
          ) : allData.length === 0 ? (
            <div
              style={{ height: "20vh", display: "flex", alignItems: "center" }}
            >
              No Comments
            </div>
          ) : (
            <InfiniteLoader
              hasNextPage={true}
              isNextPageLoading={isLoadingCurrent}
              items={allData}
              loadNextPage={fetchMore}
              currentPage={currentPage}
              discussionId={discussionId}
              topicId={topicId}
            />
          )}
        </ListContainer>

        {/* <CommentColumn comments={allComments} numComments={discussion?.allComments} commentSentiment="All" color="white" topicId={topicId} /> */}
      </ColumnContainer>
      {/* </TabContent> */}
      {/* <TabContent id={1} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={positiveComments} numComments={discussion?.positiveComments} commentSentiment="Positive" color="white" topicId={topicId} />
        </ColumnContainer>
      </TabContent>
      <TabContent id={2} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={neutralComments} numComments={discussion?.neutralComments} commentSentiment="Neutral" color="white" topicId={topicId} />
        </ColumnContainer>
      </TabContent>
      <TabContent id={3} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={negativeComments} numComments={discussion?.negativeComments} commentSentiment="Negative" color="white" topicId={topicId} />
        </ColumnContainer>
      </TabContent> */}
    </ThreadContainer>
  );
}

export default memo(DiscussionThread);
