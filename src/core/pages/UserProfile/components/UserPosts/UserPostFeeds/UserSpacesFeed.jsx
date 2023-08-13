/* eslint-disable react/jsx-no-useless-fragment */
import React, {
  useState, useEffect, useCallback, memo,
} from 'react'
import { useGetUserSpacesQuery } from '../../../../../../api/services/spaces.ts'
import CardLoader from '../../../../../CommonComponents/CardLoader/CardLoader'
import InfiniteListLoader from '../../../../../CommonComponents/InfiniteLoaders/InfiniteListLoader'
import UserSpaceListItem from '../../../../../CommonComponents/InfiniteLoaders/ListItems/UserSpaceListItem'
import { CardContainer } from '../../../../HomePage/components/HomePageFeeds/Style/index'

function UserSpacesFeed({ profileUserId }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const
    {
      data: userSpaces, isLoading: isLoadingUserSpaces, isUninitialized, isFetching,
    } = useGetUserSpacesQuery({ userId: profileUserId, currentPage })

  useEffect(() => {
    if (userSpaces) {
      setAllData([...allData, ...userSpaces])
    }
  }, [userSpaces])

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  return (
    <>
      { (isUninitialized || isLoadingUserSpaces || allData.length === 0) ? <CardLoader /> : (
        <CardContainer>
          <InfiniteListLoader
            hasNextPage
            isNextPageLoading={isLoadingUserSpaces || isFetching}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            Item={UserSpaceListItem}
          />
        </CardContainer>
      )}
    </>
  )
}

export default memo(UserSpacesFeed)
