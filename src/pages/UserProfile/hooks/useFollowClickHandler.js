/* eslint-disable no-unused-expressions */
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import followActions from '../../../redux/actions/follows/index'
import useBindDispatch from '../../hooks/redux/useBindDispatch'

export default (userId, isFollowing) => {
  const { addNewFollow, removeFollow } = useBindDispatch(followActions)
  const currentUser = useSelector((s) => s.session.currentUser)
  return useCallback(() => {
    isFollowing
      ? removeFollow(currentUser.id || currentUser.userId, userId)
      : addNewFollow(currentUser.id || currentUser.userId, userId)
  }, [currentUser, userId, isFollowing])
}
