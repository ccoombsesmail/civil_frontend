import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import enumActions from '../../../redux/actions/enums'
import sessionActions from '../../../redux/actions/session'
import useBindDispatch from '../../hooks/redux/useBindDispatch'

export default () => {
  const { user } = useUser({ withAssertions: true })
  const { getAllEnums, getCurrentUser } = useBindDispatch(enumActions, sessionActions)
  useEffect(() => {
    getAllEnums()
  }, [])

  useEffect(() => {
    if (user) {
      getCurrentUser(user?.id)
    }
  }, [user])
}
