/* eslint-disable react/no-unstable-nested-components */
import React, {
  memo, useCallback, useEffect, useState, useRef, createContext,
} from 'react'
import { VariableSizeGrid as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { Web, YouTube, Twitter } from '../../../enums/link_type'

const getColumnCount = (width) => {
  if (width <= 500) return 2
  if (width <= 900) return 3
  return 3 // Adjust these values based on your desired breakpoints
}

export const ColumnNumberContext = createContext()

function InfinitGridLoader({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
  Item,
  width,
}) {
  const itemCount = hasNextPage ? items.length : items.length
  const [columns, setColumns] = useState(getColumnCount(window.innerWidth))
  const gridRef = useRef(null)

  const getItemSize = useCallback((index) => {
    const item = items[index]
    if (item.reportStatus === 'REMOVED') return 350
    const itemHeight = Number.isNaN(item.contentHeight) || !item.contentHeight ? 200 : item.contentHeight
    switch (item?.externalContentData?.linkType) {
      case YouTube:
        console.log(500 + itemHeight)
        return 800 + itemHeight
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

  useEffect(() => {
    setColumns(getColumnCount(width))
  }, [width])

  const calcColWidth = useCallback(() => {
    const colWidth = width / getColumnCount(width)
    return colWidth
  }, [width, columns])

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.resetAfterColumnIndex(0, true)
    }
  }, [width])

  return (
    <ColumnNumberContext.Provider value={{ colNumber: getColumnCount(width) }}>

      <InfiniteLoader
          // ref={infiniteLoaderRef}
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className="List"
            columnWidth={calcColWidth}
            rowHeight={() => 400}
            columnCount={getColumnCount(width)}
            height={1000}
            rowCount={width / getColumnCount(width)}
            itemSize={getItemSize}
            // onItemsRendered={(gridProps) => {
            //   onItemsRendered({
            //   // Map react-window grid properties back to InfiniteLoader
            //   // This ensures InfiniteLoader knows when to load more data
            //     visibleStartIndex: gridProps.visibleRowStartIndex * getColumnCount(width) + gridProps.visibleColumnStartIndex,
            //     visibleStopIndex: gridProps.visibleRowStopIndex * getColumnCount(width) + gridProps.visibleColumnStopIndex,
            //   })
            // }}
            ref={gridRef}
            width={width || 500}
          >
            {Item}
          </List>
        )}
      </InfiniteLoader>
    </ColumnNumberContext.Provider>

  )
}

export default memo(InfinitGridLoader)
