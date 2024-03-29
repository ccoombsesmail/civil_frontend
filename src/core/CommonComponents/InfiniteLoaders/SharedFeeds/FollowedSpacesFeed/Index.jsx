/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useCallback } from 'react'
import { useGetAllFollowedSpacesQuery } from '../../../../../api/services/spaces.ts'
import CardLoader from '../../../CardLoader/CardLoader'
import InfiniteListLoader from '../../InfiniteListLoader'
import FollowedSpaceListItem from '../../ListItems/FollowedSpaceListItem'
import { CardContainer } from '../Style/index'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

function FollowedSpacesFeed() {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { currentUser } = useGetCurrentUser()
  const
    {
      data: followedSpaces, isLoading: isLoadingFollowedSpaces, isUninitialized, isFetching,
    } = useGetAllFollowedSpacesQuery(currentPage, {
      skip: !currentUser,
    })

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
