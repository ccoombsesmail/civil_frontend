/* eslint-disable react/jsx-no-useless-fragment */
import React, {
  useState, useEffect, useCallback, memo,
} from 'react'
import { useGetUserDiscussionsQuery } from '../../../../../../api/services/discussions.ts'
import CardLoader from '../../../../../CommonComponents/CardLoader/CardLoader'
import InfiniteListLoader from '../../../../../CommonComponents/InfiniteLoaders/InfiniteListLoader'
import { CardContainer } from '../../../../HomePage/components/HomePageFeeds/Style/index'
import UserDiscussionListItem from '../../../../../CommonComponents/InfiniteLoaders/ListItems/UserDiscussionListItem'

function UserSpacesFeed({ profileUserId }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const
    {
      data: userDiscussions, isLoading: isLoadingUserDiscussions, isUninitialized, isFetching,
    } = useGetUserDiscussionsQuery({ userId: profileUserId, currentPage })

  useEffect(() => {
    if (userDiscussions) {
      setAllData([...allData, ...userDiscussions])
    }
  }, [userDiscussions])

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  return (
    <>
      { (isUninitialized || isLoadingUserDiscussions || allData.length === 0) ? <CardLoader /> : (
        <CardContainer>
          <InfiniteListLoader
            hasNextPage
            isNextPageLoading={isLoadingUserDiscussions || isFetching}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            Item={UserDiscussionListItem}
          />
        </CardContainer>
      )}
    </>
  )
}

export default memo(UserSpacesFeed)
