/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react'
import {
  useAddNewTopicFollowMutation, useRemoveTopicFollowMutation,
} from '../../../../../../api/services/topicFollows.ts'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { TopicItemContext } from '../../../../../pages/HomePage/components/Topics/components/TopicItem/TopicItemContex'

export default (topic) => {
  const { currentPage, updateFollowedTopicsQuery } = React.useContext(TopicItemContext) || {}
  const [addNewFollow, { isLoading: isAddLoading }] = useAddNewTopicFollowMutation()
  const [removeFollow,  { isLoading: isRemovingLoading }] = useRemoveTopicFollowMutation()
  const { currentUser } = useGetCurrentUser()

  const onFollowBtnClick = useCallback((e) => {
    e.stopPropagation()
    topic.isFollowing
      ? removeFollow({followedTopicId: topic.id, currentPage, updateFollowedTopicsQuery})
      : addNewFollow({ id: topic.id, currentPage, updateFollowedTopicsQuery })
  }, [currentUser, topic, currentPage])

  return { onFollowBtnClick, isLoading: isAddLoading || isRemovingLoading}
}
