/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useCallback } from 'react'
import { CardContainer } from '../../../../Style'
import { useGetAllSpacesQuery } from '../../../../../../../../../api/services/spaces.ts'
import InfiniteLoader from '../../../../../Spaces/components/InfiniteLoader'
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser'
import SpaceFeedItem from './SpaceFeedItem'
import CardLoader from '../../../../../../../../CommonComponents/CardLoader/CardLoader'

function ForYouFeed() {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { currentUser } = useGetCurrentUser()

  const {
    data: currentSpaces, isLoading: isLoadingCurrent, isFetching: isFetchingCurrent, isUninitialized: isCurrentUninitialized,
  } = useGetAllSpacesQuery(currentPage, {
    skip: !currentUser,
  })

  useEffect(() => {
    if (currentSpaces) {
      setAllData([...allData, ...currentSpaces])
    }
  }, [currentSpaces])

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  if (isCurrentUninitialized) return null

  return (
    <>
      { (isLoadingCurrent || allData.length === 0) ? <CardLoader /> : (
        <CardContainer>
          <InfiniteLoader
            hasNextPage
            isNextPageLoading={isLoadingCurrent || isFetchingCurrent}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            Item={SpaceFeedItem}
          />
        </CardContainer>
      )}
    </>
  )
}

export default ForYouFeed
