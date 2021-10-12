import React from 'react'

import Comment from '../Comment/Index'
import { Container } from './Style'

export const ParentCommentContext = React.createContext(null);

const CommentColumn = ({ comments, commentSentiment, color }) => {

  return (
      <Container color={color}>
        <h1>{commentSentiment}</h1>
        {
          comments?.map((comment, idx) => {
            return (
            <ParentCommentContext.Provider key={comment.id + commentSentiment} value={comment.id}>
              <Comment rootComment={comment} commentData={comment.replies[0].data} replies={comment.replies[0].children} />
            </ParentCommentContext.Provider>
            )
          })
        }
      </Container>

  )
}


export default CommentColumn