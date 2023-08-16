/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, { useRef, useCallback, useState } from 'react'
import { VariableSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { useGetAllCommentsQuery } from '../../../../../api/services/comments.ts'
import ErrorBoundary from '../../../../CommonComponents/ErrorBoundry/Index'
import CommentItem from '../../../../CommonComponents/InfiniteLoaders/ContentItems/CommentItem/CommentItem'
import { ParentCommentContext } from '../../../../CommonComponents/InfiniteLoaders/ContentItems/CommentItem/ParentCommentContext.tsx'

// Render an item or a loading indicator.

class CommentCache {
  constructor() {
    this.sizes = {}
  }

  get(index) {
    return this.sizes[index] || 0
  }

  resetCacheAtIndex(index) {
    this.sizes[index] = undefined
  }

  // size is total number of replies + parent comment currently open
  set(index, size, isRemoving) {
    if (this.sizes[index]) {
      if (isRemoving) {
        this.sizes[index] -= size
      } else this.sizes[index] += size
    } else {
      this.sizes[index] = size
    }
  }
}

export default function ExampleWrapper({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
  discussionId,
  spaceId,
}) {
  const commentCache = new CommentCache()
  const itemCount = hasNextPage ? items.length + 1 : items.length
  const { currentUser } = useGetCurrentUser()
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

  const getContextValue = useCallback((comment, currentPage, index) => ({
    commentId: comment.data?.id,
    spaceId,
    isReplies: false,
    currentPage,
    index,
    onReplyToggle,
    resetCacheAtIndex,
    rootOfCommentReplyThreadId: comment.data?.id,
  }), [spaceId, onReplyToggle])

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index) => !hasNextPage || index < items.length
  function Item({ index, style }) {
    const currentPage = Math.floor(index / 10)
    const { data, isLoading: isLoadingCurrent, isUninitialized } = useGetAllCommentsQuery({discussionId, currentPage}, {
      skip: !currentUser,
    })
    let content
    if (isLoadingCurrent || isUninitialized || !data) {
      content = <div>Loading...</div>
    } else {
      const comment = data[index % 10]
      if (comment) {
        const value = getContextValue(comment, currentPage, index)
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

  const getItemSize = (index) => (commentCache.get(index) ? commentCache.get(index) * 400 + 400 : 400) // Default height

  return (
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
  )
}
