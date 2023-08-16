/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react'

import { useParams } from 'react-router-dom'
import { useGetAllSpaceDiscussionsQuery } from '../../../../api/services/discussions.ts'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { DiscussionItemContext } from '../ContentItems/DiscussionItem/DiscussionItemContext.tsx'
import { DiscussionItem } from '../ContentItems/DiscussionItem/DiscussionItem'

function SpaceDiscussionListItem({ index, style }) {
  const currentPage = Math.floor(index / 5)
  const { spaceId } = useParams()
  const { data, isLoading, isUninitialized } = useGetAllSpaceDiscussionsQuery({ spaceId, currentPage})
  const { currentUser } = useGetCurrentUser()
  let content
  if (isLoading || isUninitialized || !data) {
    content = <CircleLoading size={60} />
  } else {
    const discussion = data[index % 5]
    content = discussion ? (
      <DiscussionItemContext.Provider value={{ currentPage, updateSpaceDiscussionsQuery: true }}>
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

export default SpaceDiscussionListItem
