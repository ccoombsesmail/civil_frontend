/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useParams } from 'react-router-dom'
import DiscussionsItem from './DiscussionItem/Index'

import {
  Container, TableHeader, Table, ColHeader, ColItem,
} from './Style'
import { useGetAllDiscussionsQuery } from '../../../../../api/services/discussions.ts'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import { useGetTopicQuery } from '../../../../../api/services/topics.ts'
import { RightTriangleArrowFillSvg } from '../../../../../svgs/svgs'

function DiscussionsTable() {
  const { currentUser } = useGetCurrentUser()
  const { topicId } = useParams()

  const { data: discussions, isLoading: isDiscussionLoading } = useGetAllDiscussionsQuery(topicId, {
    skip: !currentUser,
  })
  const { data: topic, isLoading: isTopicLoading, isUninitialized: isTopicUninitialized } = useGetTopicQuery(topicId, {
    skip: !currentUser,
  })

  return (
    <>
      {/* <Line /> */}
      <Container>
        <TableHeader>
          <h1>
            {(isTopicUninitialized || isTopicLoading) ? null : (
              <>
                <span>{`Topic: ${topic?.title}`}</span>
                <RightTriangleArrowFillSvg size={50} rotateDown />
                <span>Discussions</span>
              </>
            )}
          </h1>
        </TableHeader>
        <Table>
          <thead>
            <ColHeader>
              <ColItem> Created By </ColItem>
              <ColItem> Title </ColItem>
              <ColItem> Comments </ColItem>
            </ColHeader>
          </thead>
          {
           isDiscussionLoading ? <CircleLoading /> : discussions?.map((discussion) => (
             <DiscussionsItem
               key={discussion.id}
               {...discussion}
               discussion={discussion}
               topicId={topicId}
             />
           ))
          }
        </Table>
      </Container>
    </>
  )
}

export default DiscussionsTable
