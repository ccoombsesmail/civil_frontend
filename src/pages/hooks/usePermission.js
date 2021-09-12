import { useSelector } from 'react-redux'

export default () => {
  const loggedIn = useSelector((s) => s.session.currentUser)
  return {
    loggedIn,
  }
}
