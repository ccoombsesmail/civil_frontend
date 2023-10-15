/* eslint-disable react/jsx-no-useless-fragment */
import React, { useCallback, useContext } from 'react'
import { Button } from 'primereact/button'
import useAddRemoveSpaceFollow from './hooks/useAddRemoveSpaceFollow.tsx'
import useAddRemoveDiscussionFollow from './hooks/useAddRemoveDiscussionFollow.tsx'
import { LoginFormVisibleStateContext } from '../../../../../LoginFormVisibleStateContext'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

export function WatchButtonSpace({ space }) {
  const { currentUser } = useGetCurrentUser()
  const { setLoginFormVisible } = useContext(LoginFormVisibleStateContext)
  const { onFollowBtnClick } = useAddRemoveSpaceFollow(space)

  const onClick = useCallback((e) => {
    e.stopPropagation()
    if (currentUser) onFollowBtnClick(e)
    else setLoginFormVisible(true)
  }, [currentUser, onFollowBtnClick])
  return (
    <>
      {
      space.isFollowing ? (
        <Button rounded text icon="pi pi-bookmark-fill" className="m-1 focus:shadow-none" aria-label="Bookmark" style={{ fontSize: '2rem' }} onClick={onClick} />
      ) : (
        <Button rounded text icon="pi pi-bookmark" className="m-1 focus:shadow-none" aria-label="Bookmark" style={{ fontSize: '2rem' }} onClick={onClick} />
      )
    }

    </>

  )
}

export function WatchButtonDiscussion({ discussion }) {
  const { currentUser } = useGetCurrentUser()
  const { setLoginFormVisible } = useContext(LoginFormVisibleStateContext)
  const { onFollowBtnClick } = useAddRemoveDiscussionFollow(discussion)
  const onClick = useCallback((e) => {
    e.stopPropagation()
    if (currentUser) onFollowBtnClick(e)
    else setLoginFormVisible(true)
  }, [currentUser, onFollowBtnClick])
  return (
    <>
      {
      discussion.isFollowing ? (
        <Button rounded text icon="pi pi-bookmark-fill" className="m-1 focus:shadow-none" aria-label="Bookmark" style={{ fontSize: '2rem' }} onClick={onClick} />
      ) : (
        <Button rounded text icon="pi pi-bookmark" className="m-1 focus:shadow-none" aria-label="Bookmark" style={{ fontSize: '2rem' }} onClick={onClick} />
      )
    }

    </>

  )
}
