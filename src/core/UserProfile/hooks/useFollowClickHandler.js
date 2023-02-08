/* eslint-disable no-unused-expressions */
import { useCallback } from 'react'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'
import {
  useAddNewFollowMutation, useRemoveFollowMutation,
} from '../../../api/services/follows.ts'

export default (profileUserId, isFollowing) => {
  const [addNewFollow] = useAddNewFollowMutation()
  const [removeFollow] = useRemoveFollowMutation()
  const { currentUser } = useGetCurrentUser()

  return useCallback(() => {
    isFollowing
      ? removeFollow(profileUserId)
      : addNewFollow({ followedUserId: profileUserId })
  }, [currentUser, profileUserId, isFollowing])
}
