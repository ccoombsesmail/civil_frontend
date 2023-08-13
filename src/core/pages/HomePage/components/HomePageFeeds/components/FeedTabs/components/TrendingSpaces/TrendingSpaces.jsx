/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useCallback } from 'react'
import { useGetAllSpacesQuery } from '../../../../../../../../../api/services/spaces.ts'
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser'
import TrendingSpacesItem from './TrendingSpacesItem'
import CardLoader from '../../../../../../../../CommonComponents/CardLoader/CardLoader'
import InfinitGridLoader from '../../../../../../../../CommonComponents/InfiniteLoaders/InfiniteGridLoader'
import useElementWidth from '../../../../../../../../CommonComponents/InfiniteLoaders/hooks/useElementWidth'

function TrendingSpaces() {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { currentUser } = useGetCurrentUser()

  const {
    data: currentSpaces, isLoading: isLoadingCurrent, isFetching: isFetchingCurrent, isUninitialized: isCurrentUninitialized,
  } = useGetAllSpacesQuery(currentPage, {
    skip: !currentUser,
  })

  const [elementRef, width] = useElementWidth()

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
      <div ref={elementRef} style={{height: '1000px'}}>
        { (isLoadingCurrent || allData.length === 0) ? <CardLoader /> : (
          <InfinitGridLoader
            hasNextPage
            isNextPageLoading={isLoadingCurrent || isFetchingCurrent}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            Item={TrendingSpacesItem}
            width={width}
          />
        )}
      </div>
    </>
  )
}

export default TrendingSpaces
