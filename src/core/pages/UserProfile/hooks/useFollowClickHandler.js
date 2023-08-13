/* eslint-disable no-unused-expressions */
import { useCallback } from 'react'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import {
  useAddNewFollowMutation, useRemoveFollowMutation,
} from '../../../../api/services/follows.ts'

export default (profileUserId, isFollowing) => {
  const [addNewFollow, { isLoading: isAddLoading }] = useAddNewFollowMutation()
  const [removeFollow, { isLoading: isRemovingLoading }] = useRemoveFollowMutation()
  const { currentUser } = useGetCurrentUser()

  const onFollowBtnClick = useCallback(() => {
    isFollowing
      ? removeFollow(profileUserId)
      : addNewFollow({ followedUserId: profileUserId })
  }, [currentUser, profileUserId, isFollowing])

  return { onFollowBtnClick, isLoading: isAddLoading || isRemovingLoading}
}
