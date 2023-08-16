/* eslint-disable import/no-cycle */
import React, { useCallback } from 'react'
import ErrorBoundary from '../../../../CommonComponents/ErrorBoundry/Index'

import { Container } from './Style'
import CommentItem from '../../../../CommonComponents/InfiniteLoaders/ContentItems/CommentItem/CommentItem'
import { ParentCommentContext } from '../../../../CommonComponents/InfiniteLoaders/ContentItems/CommentItem/ParentCommentContext.tsx'

function CommentColumn({
  numComments, comments, commentSentiment, color, spaceId, isReplies, commentType, reportedContentId, focusedCommentId,
}) {
  const getContextValue = useCallback((comment) => ({
    id: comment.data.id,
    spaceId,
    isReplies,
    rootCommentId: comment.data.id,
    rootOfCommentReplyThreadId: comment.data.id,
    commentType,
    reportedContentId,
    focusedCommentId,
  }), [isReplies, spaceId, commentType, focusedCommentId])
  return (
    <Container color={color} isReplies={isReplies}>
      <h1>
        {numComments || ''}
        {' '}
        {commentSentiment || ''}
        {' '}
        { isReplies ? 'Replies' : 'Comments' }
      </h1>
      {
          comments.length === 0
            ? (
              <div style={{height: '20vh', display: 'flex', alignItems: 'center'}}>
                No
                {' '}
                { isReplies ? 'Replies' : 'Comments' }
              </div>
            )
            : comments?.map((comment, idx) => {
              const value = getContextValue(comment)
              return (
                <ErrorBoundary key={comment.data?.id || String(idx)}>
                  <ParentCommentContext.Provider
                    key={comment.data?.id || String(idx)}
                    value={value}
                  >
                    <CommentItem
                      key={comment.data?.id || String(idx)}
                      level={0}
                      commentData={comment.data}
                      replies={comment.children}
                    />
                  </ParentCommentContext.Provider>
                </ErrorBoundary>

              )
            })
        }
    </Container>
  )
}

export default CommentColumn
