/* eslint-disable import/no-cycle */
import React, { useCallback, useMemo } from 'react'
import ErrorBoundary from '../../../../CommonComponents/ErrorBoundry/Index'

import Comment from '../Comment/Index'
import { ParentCommentContext } from './ParentCommentContext'
import { Container } from './Style'

function CommentColumn({
  numComments, comments, commentSentiment, color, topicId, isReplies, commentType, reportedContentId
}) {
  const getContextValue = useCallback((comment) => ({
    commentId: comment.data.id,
    topicId,
    isReplies,
    rootCommentId: comment.data.id,
    rootOfCommentReplyThreadId: comment.data.id,
    commentType,
    reportedContentId
  }), [isReplies, topicId, commentType])
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
          comments.length === 0 ? <div style={{height: '20vh', display: 'flex', alignItems: 'center'}}>No { isReplies ? 'Replies' : 'Comments' }</div> : comments?.map((comment, idx) => {
            const value = getContextValue(comment)
            return (
              <ErrorBoundary key={comment.data?.id || String(idx)}>
                <ParentCommentContext.Provider
                  key={comment.data?.id || String(idx)}
                  value={value}
                >
                  <Comment
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
