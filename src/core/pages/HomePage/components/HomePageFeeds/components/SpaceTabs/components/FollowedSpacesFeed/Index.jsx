/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useCallback } from 'react'
import { CardContainer } from '../../../../Style'
import { useGetAllFollowedSpacesQuery } from '../../../../../../../../../api/services/spaces.ts'
import InfiniteLoader from '../../../../../Spaces/components/InfiniteLoader'
import FollowedSpaceItem from './FollowedSpaceItem'
import CardLoader from '../../../../../../../../CommonComponents/CardLoader/CardLoader'

function FollowedSpacesFeed() {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const
    {
      data: followedSpaces, isLoading: isLoadingFollowedSpaces, isUninitialized, isFetching,
    } = useGetAllFollowedSpacesQuery()

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
          <InfiniteLoader
            hasNextPage
            isNextPageLoading={isLoadingFollowedSpaces || isFetching}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            Item={FollowedSpaceItem}
          />
        </CardContainer>
      )}
    </>
  )
}

export default FollowedSpacesFeed
