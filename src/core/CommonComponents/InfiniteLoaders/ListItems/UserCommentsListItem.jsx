import React, { memo, useContext, useMemo } from 'react'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { useGetUserCommentsQuery } from '../../../../api/services/comments.ts'
import ErrorBoundary from '../../ErrorBoundry/Index'
import CommentItem from '../ContentItems/CommentItem/CommentItem'
import { ParentCommentContext } from '../ContentItems/CommentItem/ParentCommentContext.tsx'
import { CommentListItemContext } from '../utils/CommentListItemContext.ts'

function UserCommentsListItem({ index, style }) {
  const currentPage = Math.floor(index / 5)
  const { currentUser } = useGetCurrentUser()

  const {
    spaceId,
    isReplies,
    onReplyToggle,
    resetCacheAtIndex,
    profileUserId,
  } = useContext(CommentListItemContext)

  const { data, isLoading: isLoadingCurrent, isUninitialized } = useGetUserCommentsQuery({userId: profileUserId, currentPage})
  let content
  if (isLoadingCurrent || isUninitialized || !data) {
    content = <div>Loading...</div>
  } else {
    const comment = data[index % 5]
    if (comment) {
      const value = useMemo(() => ({
        commentId: comment.data?.id,
        spaceId,
        isReplies,
        onReplyToggle,
        resetCacheAtIndex,
        currentPage,
        index,
        rootOfCommentReplyThreadId: comment.data?.id,
      }), [onReplyToggle, resetCacheAtIndex])
      content = (
        <ErrorBoundary>
          <ParentCommentContext.Provider
            key={comment.data?.id || String(index)}
            value={value}
          >
            <CommentItem
              key={comment.data?.id || String(index)}
              onReplyToggle={onReplyToggle}
              level={0}
              commentData={comment.data}
              replies={comment.children}
            />
          </ParentCommentContext.Provider>
        </ErrorBoundary>
      )
    } else {
      content = null
    }
  }

  return <div style={style}>{content}</div>
}

export default memo(UserCommentsListItem)
