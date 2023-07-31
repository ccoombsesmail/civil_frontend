/* eslint-disable react/no-unstable-nested-components */
import React, { memo, useCallback, useRef } from 'react'
import { VariableSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { Web, YouTube, Twitter } from '../../../../../enums/link_type'

function DiscussionsInfiniteLoader({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
  Item,
  feedType,
}) {
  const itemCount = hasNextPage ? items.length : items.length
  const infiniteLoaderRef = useRef(null)

  const getItemSize = useCallback((index) => {
    if (feedType === 'Table') return 100
    const item = items[index]
    if (item.reportStatus === 'REMOVED') return 300
    if (item.title === 'General') return 450
    const calcHeight = item.contentHeight || 500
    switch (item?.externalContentData?.linkType) {
      case YouTube:
        return 80 + 40 + 600 + 150 + calcHeight
      case Web:
        return 900 + calcHeight
      case Twitter:
        return 1200 + calcHeight
      default:
        if (item?.editorState.includes('image')) return 500 + calcHeight
        return 400 + calcHeight
    }
  }, [items])

  const loadMoreItems = useCallback(() => {
    if (!isNextPageLoading) loadNextPage()
  }, [isNextPageLoading])

  const isItemLoaded = useCallback((index) => index < items.length - 1, [items.length])

  return (
    <InfiniteLoader
      ref={infiniteLoaderRef}
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      threshold={3}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className="List"
          height={1600}
          itemCount={itemCount}
          itemSize={getItemSize}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width="100%"
        >
          {Item}
        </List>
      )}
    </InfiniteLoader>
  )
}

export default memo(DiscussionsInfiniteLoader)
