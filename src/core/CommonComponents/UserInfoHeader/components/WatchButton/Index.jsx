/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'
import { Button } from 'primereact/button'
import useAddRemoveSpaceFollow from './hooks/useAddRemoveSpaceFollow.tsx'
import useAddRemoveDiscussionFollow from './hooks/useAddRemoveDiscussionFollow.tsx'

export function WatchButtonSpace({ space }) {
  const { onFollowBtnClick } = useAddRemoveSpaceFollow(space)
  return (
    <>
      {
      space.isFollowing ? (
        <Button rounded text icon="pi pi-bookmark-fill" className="m-1 focus:shadow-none" aria-label="Bookmark" style={{ fontSize: '2rem' }} onClick={onFollowBtnClick} />
      ) : (
        <Button rounded text icon="pi pi-bookmark" className="m-1 focus:shadow-none" aria-label="Bookmark" style={{ fontSize: '2rem' }} onClick={onFollowBtnClick} />
      )
    }

    </>

  )
}

export function WatchButtonDiscussion({ discussion }) {
  const { onFollowBtnClick } = useAddRemoveDiscussionFollow(discussion)
  return (
    <>
      {
      discussion.isFollowing ? (
        <Button rounded text icon="pi pi-bookmark-fill" className="m-1 focus:shadow-none" aria-label="Bookmark" style={{ fontSize: '2rem' }} onClick={onFollowBtnClick} />
      ) : (
        <Button rounded text icon="pi pi-bookmark" className="m-1 focus:shadow-none" aria-label="Bookmark" style={{ fontSize: '2rem' }} onClick={onFollowBtnClick} />
      )
    }

    </>

  )
}
