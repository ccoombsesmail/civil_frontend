/* eslint-disable max-len */
import React from 'react'

import CommentColumn from '../../../../../pages/DiscussionsPage/components/CommentColumn/Index'
import { ColumnContainer } from '../../../../../pages/DiscussionsPage/components/CommentThread/Style'
import { useGetAllTribunalCommentsQuery } from '../../../../../../api/services/tribunal_comments.ts'

function TribunalCommentTabContent({ contentId, commentType }) {
  const { data: comments } = useGetAllTribunalCommentsQuery({ contentId, commentType})

  return (
    <ColumnContainer>
      <CommentColumn reportedContentId={contentId} comments={comments || []} commentSentiment={commentType} color="white" commentType={commentType} />
    </ColumnContainer>

  )
}

export default TribunalCommentTabContent
