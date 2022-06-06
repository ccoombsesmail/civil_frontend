import React from 'react'
import useGoToCommentThread from '../../../../hooks/routing/useGoToCommentThread'

import { Row, RowItem } from '../Style/index'

const SubTopicsItem = ({
  id, title, createdBy, allComments, topicId, subtopic, description, createdByIconSrc
}) => {
  const goToCommentThread = useGoToCommentThread(topicId, id)
  console.log(subtopic)
  return (
    <tbody>
      <Row onClick={goToCommentThread}>
        <RowItem> <img src={createdByIconSrc} alt="" /> {createdBy}</RowItem>
        <RowItem>{title}</RowItem>
        <RowItem>{allComments}</RowItem>
      </Row>
    </tbody>

  )
}

export default SubTopicsItem
