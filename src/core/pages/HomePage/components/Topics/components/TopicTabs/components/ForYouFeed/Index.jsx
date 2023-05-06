import React, { useState, useEffect, useCallback } from "react";
import { CardContainer } from '../../../../Style'
import { useGetAllTopicsQuery } from '../../../../../../../../../api/services/topics.ts'
import InfiniteLoader from '../../../InfiniteLoader'
import { CircleLoading } from '../../../../../../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from "../../../../../../../../App/hooks/useGetCurrentUser";
import TopicFeedItem from "./TopicFeedItem";

function ForYouFeed() {

  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { currentUser } = useGetCurrentUser()

  const {
    data: currentTopics, isLoading: isLoadingCurrent, isFetching: isFetchingCurrent, isSuccess: isCurrentSuccess, isUninitialized: isCurrentUninitialized,
  } = useGetAllTopicsQuery(currentPage, {
    skip: !currentUser,
  })

  useEffect(() => {
    if (currentTopics) {
      setAllData([...allData, ...currentTopics])
    }
  }, [currentTopics])

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  if (isCurrentUninitialized) return null

  return (
    <>
      { (isLoadingCurrent || allData.length === 0) ? <CircleLoading size={60} /> : (
          <CardContainer>
            <InfiniteLoader
              hasNextPage
              isNextPageLoading={isLoadingCurrent || isFetchingCurrent}
              items={allData}
              loadNextPage={fetchMore}
              currentPage={currentPage}
              Item={TopicFeedItem}
            />
          </CardContainer>
        )}
    </>
  );
}

export default ForYouFeed;
