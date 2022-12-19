/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import SubTopicsItem from './SubTopicsItem/Index'

import { Line } from '../../Style/index'
import {
  Container, TableHeader, Table, ColHeader, ColItem,
} from './Style'
import { useGetAllSubTopicsQuery } from '../../../../../../api/services/subtopics'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { CircleLoading } from '../../../../../../svgs/spinners/CircleLoading'
import { useGetTopicQuery } from '../../../../../../api/services/topics'

const SubTopicsTable = () => {
  const { currentUser } = useGetCurrentUser()
  const { topicId } = useParams()

  const {data: subtopics, isLoading: isSubTopicLoading, isUninitialized: isSubTopicUninitialized} = useGetAllSubTopicsQuery(topicId, {
    skip: !currentUser
  })
  const {data: topic, isLoading: isTopicLoading, isUninitialized: isTopicUninitialized } = useGetTopicQuery(topicId, {
    skip: !currentUser
  })

  return (
    <>
      <Line />
      <Container>
        <TableHeader>
          <h1>
           { (isTopicUninitialized || isTopicLoading) ? null : <span>{topic.title}</span> }
            <span>Sub Topics</span>
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
           isSubTopicLoading ? <CircleLoading /> : subtopics?.map((subtopic) => (
              <SubTopicsItem
                key={subtopic.id}
                {...subtopic}
                subtopic={subtopic}
                topicId={topicId}
              />
            ))
          }
        </Table>
      </Container>
    </>
  )
}

export default SubTopicsTable
