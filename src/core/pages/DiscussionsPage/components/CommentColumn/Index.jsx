/* eslint-disable import/no-cycle */
import React, { useMemo } from 'react'

import Comment from '../Comment/Index'
import { ParentCommentContext } from './ParentCommentContext'
import { Container } from './Style'

function CommentColumn({
  numComments, comments, commentSentiment, color, topicId, isReplies,
}) {
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
          comments?.map((comment, idx) => {
            const value = useMemo(() => ({
              commentId: comment.data?.id,
              topicId,
              isReplies,
            }), [comment.data?.id, topicId, isReplies])
            return (
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
            )
          })
        }
    </Container>
  )
}

export default CommentColumn
