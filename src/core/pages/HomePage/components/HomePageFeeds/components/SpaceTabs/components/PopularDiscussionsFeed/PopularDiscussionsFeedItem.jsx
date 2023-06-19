/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react'

import { useGetPopularDiscussionsQuery } from '../../../../../../../../../api/services/discussions.ts'
import { CircleLoading } from '../../../../../../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser'
import { DiscussionItemContex } from '../../../../../../../DiscussionsPage/components/DiscussionsFeed/components/CardFeedItem/DiscussionItemContext.ts'
import { DiscussionItem } from '../../../../../../../DiscussionsPage/components/DiscussionsFeed/components/CardFeedItem/CardFeedItem'

function PopularDiscussionsFeedItem({ index, style }) {
  const { data, isLoading, isUninitialized } = useGetPopularDiscussionsQuery({ currentPage: Math.floor(index / 10)})
  const { currentUser } = useGetCurrentUser()
  let content
  if (isLoading || isUninitialized || !data) {
    content = <CircleLoading size={60} />
  } else {
    const discussion = data[index % 10]
    content = discussion ? (
      <DiscussionItemContex.Provider value={{currentPage: Math.floor(index / 5), spaceId: discussion.spaceId}}>
        <DiscussionItem
          style={style}
          key={discussion.id}
          discussion={discussion}
          user={currentUser}
          currentPage={Math.floor(index / 5)}
        />
      </DiscussionItemContex.Provider>

    ) : null
  }
  return <div style={style}>{content}</div>
}

export default PopularDiscussionsFeedItem
