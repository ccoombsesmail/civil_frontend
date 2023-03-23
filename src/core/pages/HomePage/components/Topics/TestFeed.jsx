/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */

// import React, {
//   useState, useEffect, useCallback, useRef, useMemo,
// } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useGetAllTopicsQuery } from '../../../../../api/services/topics.ts'
// import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
// import TopicItem from './components/TopicItem/Index'
// import Header from './components/Header/Index'
// import { CardContainer, Container, BorderContainer } from './Style'
// import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
// import uiActionCreators from '../../../../../redux/actions/ui'

// const PAGE_SIZE = 15;

// function InfiniteScrollingFeed() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const observerRef = useRef(null);
//   const { currentUser } = useGetCurrentUser()
//   // Define the RTK Query to fetch topics
//   const {
//     data: topicsData,
//     isSuccess: topicsSuccess,
//     isLoading: topicsLoading,
//     error: topicsError,
//     isFetchingMore,
//     refetch,
//   } = useGetAllTopicsQuery(currentPage, {
//     skip: !currentUser || currentPage === 0,
//   })

//   // If there is an error fetching topics, log it
//   useEffect(() => {
//     if (topicsError) {
//       console.error('Error fetching topics:', topicsError);
//     }
//   }, [topicsError])

//   // If we have no topics yet, return an empty div
//   if (!topicsSuccess || topicsLoading) {
//     return <div>Loading...</div>;
//   }

//   // If we have topics, split them into groups of 5 to render in sliding window
//   const currentTopics = topicsData;

//   // Load more topics when we reach the end or beginning of the current set of topics
//   const handleIntersection = (entries) => {
//     const entry = entries[0];
//     if (entry.isIntersecting && !isFetchingMore) {
//       if (entry.boundingClientRect.top < 0) {
//         setCurrentPage((prevPage) => prevPage + 1);
//       } else {
//         setCurrentPage((prevPage) => prevPage - 1);
//       }
//     }
//   };

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(handleIntersection, {
//       rootMargin: '200px',
//     });
//     observerRef.current.observe(document.querySelector('#load-more-top'));
//     observerRef.current.observe(document.querySelector('#load-more-bottom'));
//     return () => observerRef.current.disconnect();
//   }, [isFetchingMore]);

//   useEffect(() => {
//     refetch({ skip: (currentPage - 1) * PAGE_SIZE, take: PAGE_SIZE });
//   }, [currentPage, refetch]);

//   return (
//     <div>
//       {currentTopics.map((topic) => (
//         <div key={topic.id}>{topic.title}</div>
//       ))}
//       {isFetchingMore && <div>Loading more topics...</div>}
//       <div id="load-more-top"></div>
//       <div id="load-more-bottom"></div>
//     </div>
//   );
// }

// export default InfiniteScrollingFeed;

import React, {
  useRef, useState, useCallback, useEffect, useMemo, PureComponent,
} from 'react'

import { useDebouncedCallback } from 'use-lodash-debounce'

import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'

import useBindDispatch from '../../../../hooks/redux/useBindDispatch'
import uiActionCreators from '../../../../../redux/actions/ui'

import TopicItem from './components/TopicItem/Index'
import Header from './components/Header/Index'
import { CardContainer, Container, BorderContainer } from './Style'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { useGetAllTopicsQuery } from '../../../../../api/services/topics.ts'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import { ObserverContext } from '../ObserverContext'
import ExampleWrapper from './InfiniteLoader'

// const PAGE_SIZE = 5

// const LOADING = 1
// const LOADED = 2
// const itemStatusMap = {}

// function containsEmptySlots(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (!(i in array)) {
//       return true
//     }
//   }
//   return false
// }

function Topics() {
  const { openModal } = useBindDispatch(uiActionCreators)
  const { currentUser } = useGetCurrentUser()
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])

  const {
    data: currentTopics, isLoading: isLoadingCurrent, isFetching: isFetchingCurrent, isSuccess: isCurrentSuccess, isUninitialized: isCurrentUninitialized,
  } = useGetAllTopicsQuery(currentPage, {
    skip: !currentUser,
  })

  useEffect(() => {
    if (currentTopics) {
      setAllData([...allData, ...currentTopics.items])
    }
  }, [currentTopics])

  const rowCount = allData.length

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  return (
    <Container>
      <BorderContainer>
        <Header user={currentUser} openModal={openModal} />
        { isCurrentUninitialized ? null : (
          <CardContainer>
            <ExampleWrapper
              hasNextPage
              isNextPageLoading={isLoadingCurrent}
              items={allData}
              loadNextPage={fetchMore}
            />
          </CardContainer>
        )}
        {/* {isFetchingNext && <CircleLoading size="200px" /> } */}

      </BorderContainer>
    </Container>
  )
}

export default Topics
