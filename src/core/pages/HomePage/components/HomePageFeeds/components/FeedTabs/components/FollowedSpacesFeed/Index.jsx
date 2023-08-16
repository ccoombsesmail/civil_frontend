/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useCallback } from 'react'
import { CardContainer } from '../../../../Style'
import { useGetAllFollowedSpacesQuery } from '../../../../../../../../../api/services/spaces.ts'
import CardLoader from '../../../../../../../../CommonComponents/CardLoader/CardLoader'
import InfiniteListLoader from '../../../../../../../../CommonComponents/InfiniteLoaders/InfiniteListLoader'
import FollowedSpaceListItem from '../../../../../../../../CommonComponents/InfiniteLoaders/ListItems/FollowedSpaceListItem'

function FollowedSpacesFeed() {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const
    {
      data: followedSpaces, isLoading: isLoadingFollowedSpaces, isUninitialized, isFetching,
    } = useGetAllFollowedSpacesQuery(currentPage)

  useEffect(() => {
    if (followedSpaces) {
      setAllData([...allData, ...followedSpaces])
    }
  }, [followedSpaces])

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  return (
    <>
      { (isUninitialized || isLoadingFollowedSpaces || allData.length === 0) ? <CardLoader /> : (
        <CardContainer>
          <InfiniteListLoader
            hasNextPage
            isNextPageLoading={isLoadingFollowedSpaces || isFetching}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            Item={FollowedSpaceListItem}
          />
        </CardContainer>
      )}
    </>
  )
}

export default FollowedSpacesFeed
