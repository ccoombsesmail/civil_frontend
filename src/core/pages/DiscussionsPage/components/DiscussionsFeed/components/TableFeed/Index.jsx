import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllDiscussionsQuery } from '../../../../../../../api/services/discussions.ts'

import InfiniteLoader from '../../DiscussionsInfiniteLoader'
import TableFeedItem from '../TableFeedItem/TableFeedItem'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'

const ITEMS_PER_PAGE = 10

function TableFeed() {
  const { currentUser } = useGetCurrentUser()
  const { spaceId } = useParams()
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { data: discussions, isLoading: isLoadingCurrent, isUninitialized: isCurrentUninitialized } = useGetAllDiscussionsQuery({spaceId, currentPage }, {
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
        spaceId={spaceId}
        Item={TableFeedItem}
      />
    )

  )
}

export default TableFeed
