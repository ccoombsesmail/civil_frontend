/* eslint-disable react/no-unstable-nested-components */
import React, { useRef } from 'react'
import { VariableSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { useGetAllDiscussionsQuery } from '../../../../../api/services/discussions'
import DiscussionsItem from './DiscussionItem/Index'

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
  spaceId
}) {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  // const itemCount = items.length
  const itemCount = hasNextPage ? items.length + 1 : items.length
  const { currentUser } = useGetCurrentUser()
  const infiniteLoaderRef = useRef(null);



  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index) => !hasNextPage || index < items.length

  function Item({ index, style }) {
    const { data, isLoading: isLoadingCurrent, isUninitialized } = useGetAllDiscussionsQuery({ spaceId, currentPage: Math.floor(index / 10) }, {
      skip: !currentUser,
    })

    let content
    if (isLoadingCurrent || isUninitialized || !data) {
      content = <div>Loading...</div>
    } else {
      const discussion = data[index%10]
      content = discussion ? (
        <DiscussionsItem
            style={style}
            key={discussion.id}
            {...discussion}
            discussion={discussion}
            spaceId={spaceId}
        />
      ) : null
    }

    return <div style={style}>{content}</div>
  }

  return (
    <InfiniteLoader
      ref={infiniteLoaderRef}
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className="List"
          height={800}
          itemCount={itemCount}
          itemSize={() => 100}
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
