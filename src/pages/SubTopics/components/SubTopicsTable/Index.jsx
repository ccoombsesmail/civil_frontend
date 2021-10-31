/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useSelector } from 'react-redux'

import SubTopicsItem from './SubTopicsItem/Index'

import { Line } from '../../Style/index'
import {
  Container, TableHeader, Table, ColHeader, ColItem,
} from './Style'

const SubTopicsList = () => {
  const user = useSelector((state) => state.session.currentUser)
  const subtopics = useSelector((state) => state.subtopics.list)

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
          <ColHeader>
            <ColItem> Created By </ColItem>
            <ColItem> Title </ColItem>
            <ColItem> Description </ColItem>
            <ColItem> Comments </ColItem>
          </ColHeader>
          {
            subtopics.map((subtopic) => <SubTopicsItem {...subtopic} />)
          }
        </Table>
      </Container>
    </>
  )
}

export default SubTopicsList
