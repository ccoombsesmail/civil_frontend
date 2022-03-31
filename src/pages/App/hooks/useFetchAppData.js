import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { DIDBackend, DefaultDIDAdapter } from '@elastosfoundation/did-js-sdk';
import enumActions from '../../../redux/actions/enums'
import sessionActions, { addUserActionCreatorClerk } from '../../../redux/actions/session'
import useGetDefaultDID from '../../DID/hooks/useGetDefaultDID'
import useBindDispatch from '../../hooks/redux/useBindDispatch'

export default () => {
  const dispatch = useDispatch()
  const defaultDID = useGetDefaultDID()
  const { user } = useUser({ withAssertions: true })
  DIDBackend.initialize(new DefaultDIDAdapter('mainnet'))
  const {
    getAllEnums,
    getCurrentUser,
    addDIDSession,
  } = useBindDispatch(enumActions, sessionActions)

  useEffect(() => {
    getAllEnums()
  }, [])

  useEffect(async () => {
    if (user) {
      user.iconSrc = user.profileImageUrl
      dispatch(addUserActionCreatorClerk(user))
      getCurrentUser(user?.id)
    } else if (defaultDID) {
      const doc = await defaultDID.resolve()
      addDIDSession({ did: defaultDID, doc })
    }
  }, [user, defaultDID])
}
