import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DIDBackend, DefaultDIDAdapter } from '@elastosfoundation/did-js-sdk'
import enumActions from '../../../redux/actions/enums'
import sessionActions, { addUserActionCreatorClerk } from '../../../redux/actions/session'
import useGetDefaultDID from '../../DID/hooks/useGetDefaultDID'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import useSetupInterceptorsEffect from '../../hooks/auth/useSetupInterceptorsEffect'

export default () => {
  DIDBackend.initialize(new DefaultDIDAdapter('mainnet'))
  const dispatch = useDispatch()
  const currentUser = useSelector((s) => s.session.currentUser)
  useSetupInterceptorsEffect()

  const getDefaultDID = useGetDefaultDID()
  const { user } = useUser({ withAssertions: true })

  const {
    getAllEnums,
    getCurrentUser,
    addDIDSession,
    logout,
  } = useBindDispatch(enumActions, sessionActions)

  useEffect(() => {
    getAllEnums()
  }, [getDefaultDID])

  useEffect(() => {
    const setupInitUser = async () => {
      const defaultDID = await getDefaultDID()
      if (user) {
        user.iconSrc = user.profileImageUrl
        dispatch(addUserActionCreatorClerk(user))
        getCurrentUser(user?.id)
      } else if (defaultDID) {
        const docExistsButNotValid = currentUser?.doc && !currentUser.doc.isValid()
        if (!currentUser?.doc || docExistsButNotValid) {
          console.log('***************FETCH APP DATA**************')
          const doc = await defaultDID.resolve()
          addDIDSession({ did: defaultDID, doc })
        }
      } else {
        logout()
      }
    }
    setupInitUser()
  }, [user, getDefaultDID])
}
