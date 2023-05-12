import React, { useState, useEffect, useCallback } from "react";
import { CardContainer } from '../../../../Style'
import { useGetAllFollowedSpacesQuery, useLazyGetAllFollowedSpacesQuery } from '../../../../../../../../../api/services/spaces'
import InfiniteLoader from '../../../InfiniteLoader'
import { CircleLoading } from '../../../../../../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from "../../../../../../../../App/hooks/useGetCurrentUser";
import FollowedSpaceItem from "./FollowedSpaceItem";

function FollowedSpacesFeed() {

  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { currentUser } = useGetCurrentUser()

  const 
    { data: followedSpaces, isLoading: isLoadingFollowedSpaces, isUninitialized, isFetching }
   = useGetAllFollowedSpacesQuery();

  useEffect(() => {
    if (followedSpaces) {
      setAllData([...allData, ...followedSpaces])
    }
  }, [followedSpaces])

  const fetchMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  return (
    <>
      { (isUninitialized || isLoadingFollowedSpaces || allData.length === 0) ? <CircleLoading size={60} /> : (
          <CardContainer>
            <InfiniteLoader
              hasNextPage
              isNextPageLoading={isLoadingFollowedSpaces || isFetching}
              items={allData}
              loadNextPage={fetchMore}
              currentPage={currentPage}
              Item={FollowedSpaceItem}
            />
          </CardContainer>
        )}
    </>
  );
}

export default FollowedSpacesFeed;
