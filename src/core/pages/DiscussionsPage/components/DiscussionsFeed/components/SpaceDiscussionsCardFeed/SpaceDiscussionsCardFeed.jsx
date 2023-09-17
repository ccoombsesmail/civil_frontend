/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllSpaceDiscussionsQuery } from '../../../../../../../api/services/discussions.ts'
import CardLoader from '../../../../../../CommonComponents/CardLoader/CardLoader'
import InfiniteListLoader from '../../../../../../CommonComponents/InfiniteLoaders/InfiniteListLoader'
import SpaceDiscussionListItem from '../../../../../../CommonComponents/InfiniteLoaders/ListItems/SpaceDiscussionListItem'

function SpaceDiscussionsCardFeed() {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { spaceId } = useParams()

  const {
    data: currentSpaces, isLoading: isLoadingCurrent, isFetching: isFetchingCurrent, isUninitialized: isCurrentUninitialized,
  } = useGetAllSpaceDiscussionsQuery({ spaceId, currentPage}, {
    skip: !spaceId,
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
      <div>
        { (isLoadingCurrent || allData.length === 0) ? <CardLoader /> : (
          <InfiniteListLoader
            hasNextPage
            isNextPageLoading={isLoadingCurrent || isFetchingCurrent}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            Item={SpaceDiscussionListItem}
          />
        )}
      </div>
    </>
  )
}

export default SpaceDiscussionsCardFeed
