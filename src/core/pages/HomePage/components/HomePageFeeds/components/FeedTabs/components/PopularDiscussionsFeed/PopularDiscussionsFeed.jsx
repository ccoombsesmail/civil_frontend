/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useCallback } from 'react'
import { CardContainer } from '../../../../Style'
import { useGetPopularDiscussionsQuery } from '../../../../../../../../../api/services/discussions.ts'
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser'
import CardLoader from '../../../../../../../../CommonComponents/CardLoader/CardLoader'
import PopularDiscussionsListItem from '../../../../../../../../CommonComponents/InfiniteLoaders/ListItems/PopularDiscussionsListItem'
import InfiniteListLoader from '../../../../../../../../CommonComponents/InfiniteLoaders/InfiniteListLoader'

function PopularDiscussionsFeed() {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { currentUser } = useGetCurrentUser()

  const {
    data: currentDiscussions, isLoading: isLoadingCurrent, isFetching: isFetchingCurrent, isUninitialized: isCurrentUninitialized,
  } = useGetPopularDiscussionsQuery(currentPage)

  useEffect(() => {
    if (currentDiscussions) {
      setAllData([...allData, ...currentDiscussions])
    }
  }, [currentDiscussions])

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  if (isCurrentUninitialized) return null

  return (
    <>
      { (isLoadingCurrent || allData.length === 0) ? <CardLoader /> : (
        <CardContainer>
          <InfiniteListLoader
            hasNextPage
            isNextPageLoading={isLoadingCurrent || isFetchingCurrent}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            Item={PopularDiscussionsListItem}
          />
        </CardContainer>
      )}
    </>
  )
}

export default PopularDiscussionsFeed
