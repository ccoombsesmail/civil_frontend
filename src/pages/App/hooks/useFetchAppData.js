import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import enumActions from '../../../redux/actions/enums'
import sessionActions, { addUserActionCreatorClerk } from '../../../redux/actions/session'
import useBindDispatch from '../../hooks/redux/useBindDispatch'

export default () => {
  const dispatch = useDispatch()
  const { user } = useUser({ withAssertions: true })
  const { getAllEnums, getCurrentUser } = useBindDispatch(enumActions, sessionActions)
  useEffect(() => {
    getAllEnums()
  }, [])

  useEffect(() => {
    if (user) {
      user.iconSrc = user.profileImageUrl
      dispatch(addUserActionCreatorClerk(user))
      getCurrentUser(user?.id)
    }
  }, [user])
}
