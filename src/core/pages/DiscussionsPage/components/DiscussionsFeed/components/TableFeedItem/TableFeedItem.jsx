import React from 'react'
import { longUsernameDisplay } from '../../../../../../../generic/string/longUsernameDisplay'
import { Row, RowItem } from '../../../../../../CommonComponents/AppTable/Style'
import UserIcon from '../../../../../../CommonComponents/UserIcon/Index'
import useGoToCommentThread from '../../../../../../hooks/routing/useGoToCommentThread'
import { useGetAllDiscussionsQuery } from '../../../../../../../api/services/discussions.ts'
import { useParams } from 'react-router-dom'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'


function FeedItem({
  id, title, createdByUsername, allComments, topicId, createdByIconSrc,
}) {
  const goToCommentThread = useGoToCommentThread(topicId, id)
  return (
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
  )
}


function TableFeedItem({ index, style }) {
  const { currentUser } = useGetCurrentUser()
  const { topicId } = useParams()
  const { data, isLoading: isLoadingCurrent, isUninitialized } = useGetAllDiscussionsQuery({ topicId, currentPage: Math.floor(index / 10) }, {
    skip: !currentUser,
  })

  let content
  if (isLoadingCurrent || isUninitialized || !data) {
    content = <div>Loading...</div>
  } else {
    const discussion = data[index%10]
    content = discussion ? (
      <FeedItem
          style={style}
          key={discussion.id}
          {...discussion}
          discussion={discussion}
          topicId={topicId}
      />
    ) : null
  }

  return <div style={style}>{content}</div>
}


export default TableFeedItem