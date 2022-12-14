import { useContext } from "react"
import { useGetCurrentUserQueryState, useGetCurrentUserQuery } from "../../../api/services/session"
import { UserContext } from '../Index'

export default () => {
  
  const userId = useContext(UserContext)
  const { data: currentUser, isLoading, isUninitialized } = useGetCurrentUserQueryState(userId)
  return { currentUser, isLoading, isUninitialized}
  
}