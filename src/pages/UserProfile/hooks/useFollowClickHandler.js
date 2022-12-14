/* eslint-disable no-unused-expressions */
import { useCallback, useContext } from 'react'
import { useSelector } from 'react-redux'
import { useGetCurrentUserQueryState } from '../../../api/services/session'
import followActions from '../../../redux/actions/follows/index'
import { UserContext } from '../../App/Index'
import useBindDispatch from '../../hooks/redux/useBindDispatch'

export default (profileUserId, isFollowing) => {
  const { addNewFollow, removeFollow } = useBindDispatch(followActions)
  const userContext = useContext(UserContext)
  console.log(userContext)
  const { data: currentUser } = useGetCurrentUserQueryState(userContext)
  return useCallback(() => {
    isFollowing
      ? removeFollow(profileUserId)
      : addNewFollow(profileUserId)
  }, [currentUser, profileUserId, isFollowing])
}
