import React from 'react'
import useGoToCommentThread from '../../../../../../hooks/routing/useGoToCommentThread'

import { Row, RowItem } from '../Style/index'

const SubTopicsItem = ({
  id, title, createdBy, allComments, topicId, createdByIconSrc,
}) => {
  const goToCommentThread = useGoToCommentThread(topicId, id)
  return (
    <tbody>
      <Row onClick={goToCommentThread}>
        <RowItem>
          {' '}
          <img src={createdByIconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'} alt="" />
          {' '}
          {`${createdBy.substring(0, 12)}...`}
        </RowItem>
        <RowItem>{title}</RowItem>
        <RowItem>{allComments}</RowItem>
      </Row>
    </tbody>
  )
}

export default SubTopicsItem
