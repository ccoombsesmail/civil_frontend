import React from 'react'


import { CommentContainer } from './Style'

const Comment = ({ comment }) => {

  return (
    <CommentContainer>
      {
        comment.content
      }
    </CommentContainer>

  )
}


export default Comment