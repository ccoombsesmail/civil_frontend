import React from 'react'

import Comment from '../Comment/Index'
import { Container } from './Style'

const CommentColumn = ({ comments, commentSentiment, color }) => {

  return (
    <Container color={color}>
      <h1>{commentSentiment}</h1>
      {
        comments?.map((comment) => {
          return <Comment comment={comment} />
        })
      }
    </Container>

  )
}


export default CommentColumn