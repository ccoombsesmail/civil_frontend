import React, { useState, useEffect, useCallback } from "react";
import { useGetAllDiscussionsQuery } from '../../../../../api/services/discussions.ts'

import InfiniteLoader from './DiscussionsInfiniteLoader'
import TableFeedItem from "./components/TableFeedItem/TableFeedItem.jsx";
import CardFeedItem from "./components/CardFeedItem/CardFeedItem.jsx";

import useGetCurrentUser from "../../../../App/hooks/useGetCurrentUser.js";
import { useParams } from "react-router-dom";

const ITEMS_PER_PAGE = 10

function DiscussionsFeed({ feedType }) {
  const { currentUser } = useGetCurrentUser()
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { topicId } = useParams()

  const { data: discussions, isLoading: isLoadingCurrent, isUninitialized: isCurrentUninitialized } = useGetAllDiscussionsQuery({topicId, currentPage }, {
    skip: !currentUser,
  })

  useEffect(() => {
    if (discussions) {
      setAllData([...allData, ...discussions])
    }
  }, [discussions])

  const fetchMore = useCallback(() => {
    Promise.resolve(setCurrentPage((prevPage) => prevPage + 1))
  }, [])


  return (
    
    (isCurrentUninitialized || isLoadingCurrent || allData.length === 0) ? null : (
        <InfiniteLoader
          hasNextPage={discussions.length >= ITEMS_PER_PAGE}
          isNextPageLoading={isLoadingCurrent}
          items={allData}
          loadNextPage={fetchMore}
          currentPage={currentPage}
          Item={feedType === "Table" ? TableFeedItem : CardFeedItem}
        />
        )
    
  );
}

export default DiscussionsFeed;
