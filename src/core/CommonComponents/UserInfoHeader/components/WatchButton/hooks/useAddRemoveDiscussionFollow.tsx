/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react'
import {
  useAddNewDiscussionFollowMutation, useRemoveDiscussionFollowMutation,
} from '../../../../../../api/services/discussionFollows'

import { Discussion } from '../../../../../../types/discussions/discussion.js'
import { AddRemoveDiscussionQueryParams } from '../../../../../../api/util/discussion_follows/onUpdateDiscussionFollowQueryStarted'
import { DiscussionItemContext, DiscussionItemContextValue } from '../../../../InfiniteLoaders/ContentItems/DiscussionItem/DiscussionItemContext'

export default (discussion: Discussion) => {
  // updateFollowedSpacesQuery is a flag so that RTK knows which cache to update (in this case if true, getAllFollowedSpaces query)
  // updateFocusedSpaceQuery is a flag so that RTK knows it should update the focused space (i.e the view page for a given space)
  const { 
    currentPage, 
    updateFollowedDiscussionsQuery, 
    updateFocusedDiscussionQuery, 
    updatePopularDiscussionsQuery, 
    updateSpaceDiscussionsQuery,
    updateUserDiscussionsQuery,
    currentlyViewedProfileUserId,
    isPopularDiscussion 
  } = React.useContext<DiscussionItemContextValue>(DiscussionItemContext) || {}
  
  const [addNewFollow, { isLoading: isAddLoading }] = useAddNewDiscussionFollowMutation()
  const [removeFollow, { isLoading: isRemovingLoading }] = useRemoveDiscussionFollowMutation()

  const onFollowBtnClick = useCallback((e) => {
    e.stopPropagation()
    const params: AddRemoveDiscussionQueryParams = {
      id: discussion.id, 
      currentPage, updatePopularDiscussionsQuery, 
      updateFollowedDiscussionsQuery, 
      updateFocusedDiscussionQuery, 
      updateSpaceDiscussionsQuery,
      updateUserDiscussionsQuery,
      currentlyViewedProfileUserId,
      isPopularDiscussion,
      spaceId: discussion.spaceId
    }
    discussion.isFollowing
      ? removeFollow(params)
      : addNewFollow(params)
  }, [discussion, currentPage, currentlyViewedProfileUserId, updateUserDiscussionsQuery, updatePopularDiscussionsQuery, updateFollowedDiscussionsQuery, updateFocusedDiscussionQuery, updateSpaceDiscussionsQuery])

  return { onFollowBtnClick, isLoading: isAddLoading || isRemovingLoading}
}
