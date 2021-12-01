import React from 'react'
import useGoToCommentThread from '../../../../hooks/routing/useGoToCommentThread'

import { Row, RowItem } from '../Style/index'

const SubTopicsItem = ({
  id, title, createdBy, createdAt, topicId,
}) => {
  const goToCommentThread = useGoToCommentThread(topicId, id)
  return (
    <tbody>
      <Row onClick={goToCommentThread}>
        <RowItem>{createdBy}</RowItem>
        <RowItem>{title}</RowItem>
        <RowItem>{createdAt}</RowItem>
      </Row>
    </tbody>

  )
}

export default SubTopicsItem
