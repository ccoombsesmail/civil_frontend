import React, { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import Comment from '../Comment/Index'
import { ParentCommentContext } from '../CommentColumn/Index'

const ParentComment = ({ topicId }) => {
  const targetComment = useSelector((s) => s.comments.targetComment)
  const commentRef = useCallback((node) => {
    if (node !== null) {
      node.scrollIntoView()
    }
  }, [])

  return (

    <ParentCommentContext.Provider
      value={{
        commentId: targetComment?.id,
        topicId,
      }}
    >
      <Comment commentRef={commentRef} commentData={targetComment} replies={[]} />
    </ParentCommentContext.Provider>

  )
}

export default memo(ParentComment)
