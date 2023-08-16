/* eslint-disable react/jsx-no-constructed-context-values */
import React, { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserDiscussionsQuery } from '../../../../api/services/discussions.ts'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { DiscussionItemContext } from '../ContentItems/DiscussionItem/DiscussionItemContext.tsx'
import { DiscussionItem } from '../ContentItems/DiscussionItem/DiscussionItem'

function UserDiscussionListItem({ index, style }) {
  const currentPage = Math.floor(index / 5)
  const { userId: currentlyViewedProfileUserId } = useParams()
  const { data, isLoading, isUninitialized } = useGetUserDiscussionsQuery({ userId: currentlyViewedProfileUserId, currentPage})
  const { currentUser } = useGetCurrentUser()

  const contextValue = useMemo(() => ({
    currentPage,
    currentlyViewedProfileUserId,
    updateUserDiscussionsQuery: true,
  }), [currentPage, currentlyViewedProfileUserId])
  let content
  if (isLoading || isUninitialized || !data) {
    content = <CircleLoading size={60} />
  } else {
    const discussion = data[index % 5]

    content = discussion ? (
      <DiscussionItemContext.Provider value={contextValue}>
        <DiscussionItem
          style={style}
          key={discussion.id}
          discussion={discussion}
          user={currentUser}
          currentPage={currentPage}
        />
      </DiscussionItemContext.Provider>

    ) : null
  }
  return <div style={style}>{content}</div>
}

export default memo(UserDiscussionListItem)
