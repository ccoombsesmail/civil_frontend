import React from 'react'
import { Skeleton } from 'primereact/skeleton'

function CardLoader() {
  return (
    <div className="border-round border-1 surface-border p-4 surface-card w-full">
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
}

export default CardLoader
