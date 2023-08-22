/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, {
  useState, memo, useEffect, useCallback,
} from 'react'
import { useParams } from 'react-router-dom'

import { ColumnContainer, ThreadContainer, ListContainer } from './Style/index'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { useGetUserCommentsQuery } from '../../../../../../api/services/comments.ts'
import { CircleLoading } from '../../../../../../svgs/spinners/CircleLoading'
import InfiniteCommentLoader from '../../../../../CommonComponents/InfiniteLoaders/InfiniteCommentLoader'
import UserCommentsListItem from '../../../../../CommonComponents/InfiniteLoaders/ListItems/UserCommentsListItem'

const ITEMS_PER_PAGE = 10

function UserCommentsFeed({ profileUserId }) {
  const { currentUser } = useGetCurrentUser()
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])

  const {
    data: comments,
    isUninitialized: isCurrentUninitialized,
    isLoading: isLoadingCurrent,
  } = useGetUserCommentsQuery(
    { userId: profileUserId, currentPage },
    {
      skip: !profileUserId,
    },
  )

  useEffect(() => {
    if (comments) {
      setAllData([...allData, ...comments])
    }
  }, [comments])

  const fetchMore = useCallback(() => {
    Promise.resolve(setCurrentPage((prevPage) => prevPage + 1))
  }, [])

  return (
    <ThreadContainer>
      <ColumnContainer>
        <ListContainer>
          <h1>Comments</h1>
          {isCurrentUninitialized || isLoadingCurrent ? (
            <CircleLoading size={30} />
          ) : allData.length === 0 ? (
            <div
              style={{ height: '20vh', display: 'flex', alignItems: 'center' }}
            >
              No Comments
            </div>
          ) : (
            <InfiniteCommentLoader
              hasNextPage
              isNextPageLoading={isLoadingCurrent}
              items={allData}
              loadNextPage={fetchMore}
              currentPage={currentPage}
              profileUserId={profileUserId}
              Item={UserCommentsListItem}
            />
          )}
        </ListContainer>

      </ColumnContainer>
    </ThreadContainer>
  )
}

export default memo(UserCommentsFeed)
