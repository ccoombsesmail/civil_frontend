/* eslint-disable react/no-unstable-nested-components */
import React, { memo, useCallback, useRef } from 'react'
import { VariableSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { Web, YouTube, Twitter } from '../../../../../../enums/link_type'
import { CircleLoading } from '../../../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import TopicItem from './TopicItem/Index'
import { useGetAllTopicsQuery } from '../../../../../../api/services/topics'
import ErrorBoundary from '../../../../../CommonComponents/ErrorBoundry/Index'
import { TopicItemContext } from './TopicItem/TopicItemContex'


function ExampleWrapper({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
  Item
}) {
  const itemCount = hasNextPage ? items.length : items.length
  const { currentUser } = useGetCurrentUser()
  const infiniteLoaderRef = useRef(null);

  const getItemSize = useCallback((index) => {
    const item = items[index]
    switch (item?.externalContentData?.linkType) {
      case YouTube:
        return 1000
      case Web:
        return 1000;
      case Twitter:
        return 1200;
      default:
        return 500
    }
  }, [items])

  const loadMoreItems = useCallback(() => {
    if(!isNextPageLoading) loadNextPage()
  }, [isNextPageLoading])
  
  const isItemLoaded = useCallback((index) => {
    return index < items.length-1
  }, [items.length])

  // function Item({ index, style }) {
  //   const { data, isLoading, isUninitialized } = useGetAllTopicsQuery(Math.floor(index / 5));
  //   let content
  //   if (isLoading || isUninitialized || !data) {
  //     content = <CircleLoading size={60} /> 
  //   } else {
  //     const topic = data[index%5]
  //     content = topic ? (
  //       <TopicItemContext.Provider value={{currentPage: Math.floor(index / 5)}}>
  //         <TopicItem
  //           style={style}
  //           key={topic.id}
  //           topic={topic}
  //           user={currentUser}
  //           currentPage={Math.floor(index/5)}
  //         />
  //       </TopicItemContext.Provider>

  //      ) : null    
  //   }
  //   return <div style={style}>{content}</div>
  // }

  return (
    <InfiniteLoader
      ref={infiniteLoaderRef}
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      threshold={4}
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