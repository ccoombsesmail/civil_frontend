import { useMemo } from 'react'
import { useUser } from '@clerk/clerk-react'
import useIsLoggedInViaDID from '../../DID/hooks/useIsLoggedInViaDID'
import useIsLoggedInViaCivic from '../../../civic/hooks/useIsLoggedInViaCivic.ts'

export default () => {
  const { user } = useUser({ withAssertions: true })
  const isLoggedInViaDID = useIsLoggedInViaDID()
  const isLoggedInViaCivic = useIsLoggedInViaCivic()
  return useMemo(async () => {
    // const docExistsButNotValid = currentUser?.doc && !currentUser.doc.isValid()
    const loggedInViaDID = await isLoggedInViaDID()

    return {
      signedInViaClerk: Boolean(user),
      signedInViaDID: loggedInViaDID,
      signedInViaCivic: isLoggedInViaCivic(),
    }
  }, [isLoggedInViaDID, isLoggedInViaCivic, user])
}
