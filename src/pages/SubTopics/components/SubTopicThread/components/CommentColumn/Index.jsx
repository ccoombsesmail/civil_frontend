/* eslint-disable import/no-cycle */
import React from 'react'

import Comment from '../Comment/Index'
import { Container } from './Style'

export const ParentCommentContext = React.createContext(null)

const CommentColumn = ({
  numComments, comments, commentSentiment, color,
}) => (
  <Container color={color}>
    <h1>
      {numComments || ''}
      {' '}
      {commentSentiment || ''}
      {' '}
      Comments
    </h1>
    {
          comments?.map((comment, idx) => (
            <ParentCommentContext.Provider
              key={comment.data?.id + String(idx)}
              value={comment.data?.id}
            >
              <Comment
                key={comment.data?.id + String(idx)}
                commentData={comment.data}
                replies={comment.children}
              />
            </ParentCommentContext.Provider>
          ))
        }
  </Container>

)

export default CommentColumn
