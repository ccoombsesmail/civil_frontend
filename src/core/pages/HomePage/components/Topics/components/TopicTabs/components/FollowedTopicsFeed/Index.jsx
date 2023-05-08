import React, { useState, useEffect, useCallback } from "react";
import { CardContainer } from '../../../../Style'
import { useGetAllFollowedTopicsQuery, useLazyGetAllFollowedTopicsQuery } from '../../../../../../../../../api/services/topics'
import InfiniteLoader from '../../../InfiniteLoader'
import { CircleLoading } from '../../../../../../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from "../../../../../../../../App/hooks/useGetCurrentUser";
import FollowedTopicItem from "./FollowedTopicItem";

function FollowedTopicsFeed() {

  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { currentUser } = useGetCurrentUser()

  const 
    { data: followedTopics, isLoading: isLoadingFollowedTopics, isUninitialized, isFetching }
   = useGetAllFollowedTopicsQuery();

  useEffect(() => {
    if (followedTopics) {
      setAllData([...allData, ...followedTopics])
    }
  }, [followedTopics])

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  return (
    <>
      { (isUninitialized || isLoadingFollowedTopics || allData.length === 0) ? <CircleLoading size={60} /> : (
          <CardContainer>
            <InfiniteLoader
              hasNextPage
              isNextPageLoading={isLoadingFollowedTopics || isFetching}
              items={allData}
              loadNextPage={fetchMore}
              currentPage={currentPage}
              Item={FollowedTopicItem}
            />
          </CardContainer>
        )}
    </>
  );
}

export default FollowedTopicsFeed;
