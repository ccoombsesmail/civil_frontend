import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllSpaceDiscussionsQuery } from '../../../../../api/services/discussions.ts'

import InfiniteLoader from './DiscussionsInfiniteLoader'
import TableFeedItem from './components/TableFeedItem/TableFeedItem'
import CardFeedItem from './components/CardFeedItem/CardFeedItem'

import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

const ITEMS_PER_PAGE = 5

function DiscussionsFeed({ feedType }) {
  const { currentUser } = useGetCurrentUser()
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { spaceId } = useParams()

  const { data: discussions, isLoading: isLoadingCurrent, isUninitialized: isCurrentUninitialized } = useGetAllSpaceDiscussionsQuery({spaceId, currentPage }, {
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
        Item={feedType === 'Table' ? TableFeedItem : CardFeedItem}
        feedType={feedType}
      />
    )

  )
}

export default DiscussionsFeed
