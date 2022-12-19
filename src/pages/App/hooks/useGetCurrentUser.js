import { useContext } from 'react'
import { useGetCurrentUserQueryState } from '../../../api/services/session.ts'
import { UserContext } from '../UserContext/Index'

export default () => {
  const userId = useContext(UserContext)
  const { data: currentUser, isLoading, isUninitialized } = useGetCurrentUserQueryState(userId)
  return { currentUser, isLoading, isUninitialized }
}
