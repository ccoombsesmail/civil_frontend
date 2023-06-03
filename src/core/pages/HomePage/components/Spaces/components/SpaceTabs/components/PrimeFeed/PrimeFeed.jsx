import React, { useState, useEffect } from 'react'
import { VirtualScroller } from 'primereact/virtualscroller'
import { Skeleton } from 'primereact/skeleton'
import { classNames } from 'primereact/utils'
import { useGetAllSpacesQuery } from '../../../../../../../../../api/services/spaces.ts'
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser'
import SpaceFeedItem from '../ForYouFeed/SpaceFeedItem'

export default function LazyDemo() {
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const { currentUser } = useGetCurrentUser()
  const {
    data: currentSpaces, isLoading: isLoadingCurrent, isFetching: isFetchingCurrent, isUninitialized: isCurrentUninitialized,
  } = useGetAllSpacesQuery(currentPage, {
    skip: !currentUser,
  })

  useEffect(() => {
    if (currentSpaces) {
      setAllData([...allData, ...currentSpaces])
    }
  }, [currentSpaces])

  const onLazyLoad = (event) => {
    setTimeout(() => {
      const page = Math.floor((event.last + 1) / 5)
      if (page > currentPage && !isLoadingCurrent && !isFetchingCurrent && !isCurrentUninitialized) {
        setCurrentPage((prev) => prev + 1)
      }
    }, 0)
  }

  const itemTemplate = (item, options) => {
    const className = classNames('flex align-items-center p-2', {
      'surface-hover': options.odd,
    })

    return (
      <div className={className}>
        <SpaceFeedItem item={item} index={options.index} style={{ height: `${options.props.itemSize}px`, width: '98%' }} />
      </div>
    )
  }

  const loadingTemplate = () => (
    <div className="border-round border-1 surface-border p-4 surface-card">
      <div className="flex mb-3">
        <Skeleton shape="circle" size="4rem" className="mr-2" />
        <div>
          <Skeleton width="10rem" className="mb-2" />
          <Skeleton width="5rem" className="mb-2" />
          <Skeleton height=".5rem" />
        </div>
      </div>
      <Skeleton width="100%" height="150px" />
      <div className="flex justify-content-between mt-3">
        <Skeleton width="4rem" height="2rem" />
        <Skeleton width="4rem" height="2rem" />
      </div>
    </div>
  )

  return (
    <div className="card flex justify-content-center">
      <VirtualScroller
        items={allData}
        itemSize={500}
        itemTemplate={itemTemplate}
        lazy
        onLazyLoad={onLazyLoad}
        loadingTemplate={loadingTemplate}
        showLoader
        loading={isLoadingCurrent || isFetchingCurrent || isCurrentUninitialized}
        className="border-1 surface-border border-round"
        style={{ width: '50vw', height: '700px' }}
      />
    </div>
  )
}
