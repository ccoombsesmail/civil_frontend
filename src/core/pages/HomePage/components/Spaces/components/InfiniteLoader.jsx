/* eslint-disable react/no-unstable-nested-components */
import React, { memo, useCallback, useRef } from 'react'
import { VariableSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { Web, YouTube, Twitter } from '../../../../../../enums/link_type'

function ExampleWrapper({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
  Item,
}) {
  const itemCount = hasNextPage ? items.length : items.length
  const infiniteLoaderRef = useRef(null)

  const getItemSize = useCallback((index) => {
    const item = items[index]
    switch (item?.externalContentData?.linkType) {
      case YouTube:
        return 500 + item.contentHeight
      case Web:
        return 500 + item.contentHeight
      case Twitter:
        return 600 + item.contentHeight
      default:
        if (item?.editorState.includes('image')) return 500 + item.contentHeight
        return 500 + item.contentHeight
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
          height={800}
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

export default memo(ExampleWrapper)
