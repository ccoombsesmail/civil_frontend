/* eslint-disable import/no-cycle */
import React from 'react'

import Comment from '../Comment/Index'
import { Container } from './Style'

export const ParentCommentContext = React.createContext(null)

const CommentColumn = ({ comments, commentSentiment, color }) => (
  <Container color={color}>
    <h1>{commentSentiment}</h1>
    {
          comments?.map((comment) => (
            <ParentCommentContext.Provider
              key={comment.data?.id + commentSentiment}
              value={comment.data?.id}
            >
              <Comment
                commentData={comment.data}
                replies={comment.children}
              />
            </ParentCommentContext.Provider>
          ))
        }
  </Container>

)

export default CommentColumn
