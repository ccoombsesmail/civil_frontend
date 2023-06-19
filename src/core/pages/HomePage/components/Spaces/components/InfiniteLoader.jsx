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
    const itemHeight = Number.isNaN(item.contentHeight) || !item.contentHeight ? 500 : item.contentHeight
    switch (item?.externalContentData?.linkType) {
      case YouTube:
        return 500 + itemHeight
      case Web:
        return 500 + itemHeight
      case Twitter:
        return 600 + itemHeight
      default:
        if (item?.editorState.includes('image')) return 500 + itemHeight
        return 500 + itemHeight
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

export default memo(ExampleWrapper)
