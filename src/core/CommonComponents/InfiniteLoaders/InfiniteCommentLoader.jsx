/* eslint-disable import/no-unused-modules */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, {
  useRef, useCallback, useMemo,
} from 'react'
import { VariableSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { CommentListItemContext } from './utils/CommentListItemContext.ts'
import { CommentCache } from './utils/CommentCache'

export default function InfiniteCommentLoader({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
  discussionId,
  spaceId,
  profileUserId,
  Item,
}) {
  const commentCache = new CommentCache()
  const itemCount = hasNextPage ? items.length + 1 : items.length
  const infiniteLoaderRef = useRef(null)

  const onReplyToggle = useCallback(
    (index, newSize, isRemoving) => {
      commentCache.set(index, newSize, isRemoving)
      infiniteLoaderRef.current.resetAfterIndex(index)
    },
    [infiniteLoaderRef, commentCache],
  )

  const resetCacheAtIndex = useCallback((index) => {
    commentCache.resetCacheAtIndex(index)
    infiniteLoaderRef.current?.resetAfterIndex(index)
  }, [commentCache])

  // const getContextValue = useCallback((comment, currentPage, index) => ({
  //   commentId: comment.data?.id,
  //   spaceId,
  //   isReplies: false,
  //   currentPage,
  //   index,
  //   onReplyToggle,
  //   resetCacheAtIndex,
  //   rootOfCommentReplyThreadId: comment.data?.id,
  // }), [spaceId, onReplyToggle])

  const commentListItemContextValue = useMemo(() => ({
    spaceId,
    profileUserId,
    isReplies: false,
    onReplyToggle,
    resetCacheAtIndex,
    discussionId,
  }), [spaceId, profileUserId, onReplyToggle])

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index) => !hasNextPage || index < items.length

  const getItemSize = (index) => (commentCache.get(index) ? commentCache.get(index) * 400 + 400 : 400) // Default height

  return (
    <CommentListItemContext.Provider value={commentListItemContextValue}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            ref={infiniteLoaderRef}
            className="List"
            height={1200}
            itemCount={itemCount}
            itemSize={getItemSize}
            onItemsRendered={onItemsRendered}
          >
            {Item}
          </List>
        )}
      </InfiniteLoader>
    </CommentListItemContext.Provider>
  )
}
