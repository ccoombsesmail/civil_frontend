import React, { useState, useEffect, useCallback } from "react";
import { useGetAllDiscussionsQuery } from '../../../../../../../api/services/discussions.ts'
import { useGetTopicQuery } from '../../../../../../../api/services/topics.ts'

import InfiniteLoader from '../../DiscussionsInfiniteLoader'
import TableFeedItem from "../TableFeedItem/TableFeedItem.jsx";
import useGetCurrentUser from "../../../../../../App/hooks/useGetCurrentUser.js";

function TableFeed() {
  const { currentUser } = useGetCurrentUser()
  const { topicId } = useParams()
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])

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
          topicId={topicId}
          Item={TableFeedItem}
        />
        )
    
  );
}

export default TableFeed;
