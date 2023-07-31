/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react'
import {
  useAddNewDiscussionFollowMutation, useRemoveDiscussionFollowMutation,
} from '../../../../../../api/services/discussionFollows'

import { Discussion } from '../../../../../../types/discussions/discussion.js'
import { DiscussionItemContex, DiscussionItemContextValue } from '../../../../../pages/DiscussionsPage/components/DiscussionsFeed/components/CardFeedItem/DiscussionItemContext.js'
import { AddRemoveDiscussionQueryParams } from '../../../../../../api/util/discussion_follows/onUpdateDiscussionFollowQueryStarted'

export default (discussion: Discussion) => {
  // updateFollowedSpacesQuery is a flag so that RTK knows which cache to update (in this case if true, getAllFollowedSpaces query)
  // updateFocusedSpaceQuery is a flag so that RTK knows it should update the focused space (i.e the view page for a given space)
  const { currentPage, updateFollowedDiscussionsQuery, updateFocusedDiscussionQuery, isPopularDiscussion } = React.useContext<DiscussionItemContextValue>(DiscussionItemContex) || {}
  const [addNewFollow, { isLoading: isAddLoading }] = useAddNewDiscussionFollowMutation()
  const [removeFollow, { isLoading: isRemovingLoading }] = useRemoveDiscussionFollowMutation()

  const onFollowBtnClick = useCallback((e) => {
    e.stopPropagation()
    const params: AddRemoveDiscussionQueryParams = {id: discussion.id, currentPage, updateFollowedDiscussionsQuery, updateFocusedDiscussionQuery, isPopularDiscussion }
    discussion.isFollowing
      ? removeFollow(params)
      : addNewFollow(params)
  }, [discussion, currentPage])

  return { onFollowBtnClick, isLoading: isAddLoading || isRemovingLoading}
}
