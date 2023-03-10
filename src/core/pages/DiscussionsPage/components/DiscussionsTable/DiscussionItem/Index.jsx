import React from 'react'
import { longUsernameDisplay } from '../../../../../../generic/string/longUsernameDisplay'
import { Row, RowItem } from '../../../../../CommonComponents/AppTable/Style'
import UserIcon from '../../../../../CommonComponents/UserIcon/Index'
import useGoToCommentThread from '../../../../../hooks/routing/useGoToCommentThread'

function DiscussionsItem({
  id, title, createdByUsername, allComments, topicId, createdByIconSrc,
}) {
  const goToCommentThread = useGoToCommentThread(topicId, id)
  return (
    <tbody>
      <Row onClick={goToCommentThread} gridTemplateCols="1fr 2fr 1fr" height="10vh">
        <RowItem>
          {' '}
          <UserIcon src={createdByIconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/profile_icon_2.png'} alt="" />
          {' '}
          {`${longUsernameDisplay(createdByUsername)}`}
        </RowItem>
        <RowItem>{title}</RowItem>
        <RowItem>{allComments}</RowItem>
      </Row>
    </tbody>
  )
}

export default DiscussionsItem
