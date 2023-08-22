/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useCallback } from 'react'
import { CardContainer } from '../Style'
import { useGetAllFollowedDiscussionsQuery } from '../../../../../api/services/discussions.ts'
import CardLoader from '../../../CardLoader/CardLoader'
import FollowedDiscussionsListItem from '../../ListItems/FollowedDiscussionListItem'
import InfiniteListLoader from '../../InfiniteListLoader'

function FollowedDiscussionsFeed() {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const
    {
      data: followedDiscussions, isLoading: isLoadingFollowedDiscussions, isUninitialized, isFetching,
    } = useGetAllFollowedDiscussionsQuery(currentPage)

  useEffect(() => {
    if (followedDiscussions) {
      setAllData([...allData, ...followedDiscussions])
    }
  }, [followedDiscussions])

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  return (
    <>
      { (isUninitialized || isLoadingFollowedDiscussions || allData.length === 0) ? <CardLoader /> : (
        <CardContainer>
          <InfiniteListLoader
            hasNextPage
            isNextPageLoading={isLoadingFollowedDiscussions || isFetching}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            Item={FollowedDiscussionsListItem}
          />
        </CardContainer>
      )}
    </>
  )
}

export default FollowedDiscussionsFeed
