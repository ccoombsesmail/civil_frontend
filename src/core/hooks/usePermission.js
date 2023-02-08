import { useSelector } from 'react-redux'
import useGetCurrentUser from '../App/hooks/useGetCurrentUser'

export default () => {
  const { currentUser: loggedIn } = useGetCurrentUser()
  return {
    loggedIn,
  }
}
