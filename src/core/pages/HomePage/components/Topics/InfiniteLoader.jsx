/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { VariableSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import TopicItem from './components/TopicItem/Index'

// Render an item or a loading indicator.

export default function ExampleWrapper({
  // Are there more items to load?
  // (This information comes from the most recent API request.)
  hasNextPage,

  // Are we currently loading a page of items?
  // (This may be an in-flight flag in your Redux store for example.)
  isNextPageLoading,

  // Array of items loaded so far.
  items,

  // Callback function responsible for loading the next page of items.
  loadNextPage,
}) {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length
  const { currentUser } = useGetCurrentUser()

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index) => !hasNextPage || index < items.length

  function Item({ index, style }) {
    let content
    if (!isItemLoaded(index)) {
      content = 'Loading...'
    } else {
      const topic = items[index]
      content = (
        <TopicItem
          style={style}
          key={topic.id}
          topic={topic}
          user={currentUser}
        />
      )
    }

    return <div style={style}>{content}</div>
  }

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className="List"
          height={1000}
          itemCount={itemCount}
          itemSize={() => 600}
          estimatedItemSize={600}
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
