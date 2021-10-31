import React from 'react'

import { Row, RowItem } from '../Style/index'

const SubTopicsItem = ({ title, createdBy }) => (
  <Row>
    <RowItem>{createdBy}</RowItem>
    <RowItem>{title}</RowItem>
    {/* <RowItem></RowItem> */}
  </Row>
)

export default SubTopicsItem
