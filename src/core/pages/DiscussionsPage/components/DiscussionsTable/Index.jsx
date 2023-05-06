/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useCallback  } from 'react'
import { useParams } from 'react-router-dom'

import {
  Container, TableHeader,
} from './Style'
import { useGetAllDiscussionsQuery } from '../../../../../api/services/discussions.ts'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import { useGetTopicQuery } from '../../../../../api/services/topics.ts'
import { RightTriangleArrowFillSvg } from '../../../../../svgs/svgs'
import { Table, ColHeader, ColItem } from '../../../../CommonComponents/AppTable/Style'
import InfiniteLoader from './InfiniteLoader'

const ITEMS_PER_PAGE = 10

function DiscussionsTable() {
  const { currentUser } = useGetCurrentUser()
  const { topicId } = useParams()
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])

  const { data: discussions, isLoading: isLoadingCurrent, isUninitialized: isCurrentUninitialized } = useGetAllDiscussionsQuery({topicId, currentPage }, {
    skip: !currentUser,
  })
  const { data: topic, isLoading: isTopicLoading, isUninitialized: isTopicUninitialized } = useGetTopicQuery(topicId, {
    skip: !currentUser,
  })

  useEffect(() => {
    if (discussions) {
      setAllData([...allData, ...discussions])
    }
  }, [discussions])

  const fetchMore = useCallback(() => {
    Promise.resolve(setCurrentPage((prevPage) => prevPage + 1))
  }, [])

  return (
    <>
      {/* <Line /> */}
      <Container>
        <TableHeader>
          <h1>
            {(isTopicUninitialized || isTopicLoading) ? null : (
              <>
                {/* <span>{`Topic: ${topic?.title}`}</span> */}
                {/* <RightTriangleArrowFillSvg size={50} rotateDown /> */}
                <span>Discussions</span>
              </>
            )}
          </h1>
        </TableHeader>
        <Table>
          <div>
            <ColHeader gridTemplateCols="1fr 2fr 1fr">
              <ColItem> Created By </ColItem>
              <ColItem> Title </ColItem>
              <ColItem> Comments </ColItem>
            </ColHeader>
          </div>
          {
            (isCurrentUninitialized || isLoadingCurrent || allData.length === 0) ? null : (
              <InfiniteLoader
              hasNextPage={discussions.length >= ITEMS_PER_PAGE}
              isNextPageLoading={isLoadingCurrent}
              items={allData}
              loadNextPage={fetchMore}
              currentPage={currentPage}
              topicId={topicId}
            />
           )
           
          }
        </Table>
      </Container>
    </>
  )
}

export default DiscussionsTable
