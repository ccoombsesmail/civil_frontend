/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import SubTopicsItem from './SubTopicsItem/Index'

import { Line } from '../../Style/index'
import {
  Container, TableHeader, Table, ColHeader, ColItem,
} from './Style'

const SubTopicsTable = () => {
  // const user = useSelector((state) => state.session.currentUser)
  const subtopics = Object.values(useSelector((state) => state.subtopics))
  const { topicId } = useParams()
  return (
    <>
      <Line />
      <Container>
        <TableHeader>
          <h1>
            <span>Covid</span>
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
            subtopics.map((subtopic) => (
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
