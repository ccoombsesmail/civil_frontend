/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, {
  useState, memo, useEffect, useCallback,
} from 'react'
import { useParams } from 'react-router-dom'

import { ColumnContainer, ThreadContainer, ListContainer } from './Style/index'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { useGetAllCommentsQuery } from '../../../../../api/services/comments.ts'
import InfiniteLoader from './InfiniteLoader'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'

const ITEMS_PER_PAGE = 10

function DiscussionThread() {
  const { spaceId, discussionId } = useParams()
  const { currentUser } = useGetCurrentUser()
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])

  const {
    data: comments,
    isUninitialized: isCurrentUninitialized,
    isLoading: isLoadingCurrent,
  } = useGetAllCommentsQuery(
    { discussionId, currentPage },
    {
      skip: !currentUser || !discussionId,
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
            <InfiniteLoader
              hasNextPage
              isNextPageLoading={isLoadingCurrent}
              items={allData}
              loadNextPage={fetchMore}
              currentPage={currentPage}
              discussionId={discussionId}
              spaceId={spaceId}
            />
          )}
        </ListContainer>

      </ColumnContainer>
    </ThreadContainer>
  )
}

export default memo(DiscussionThread)
