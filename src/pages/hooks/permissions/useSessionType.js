import { useMemo } from 'react'
import { useUser } from '@clerk/clerk-react'
import useIsLoggedInViaDID from '../../DID/hooks/useIsLoggedInViaDID'

export default () => {
  const { user } = useUser({ withAssertions: true })
  
  const loggedInViaDID = useIsLoggedInViaDID()
  return useMemo(() => ({
    signedInViaClerk: Boolean(user),
    signedInViaDID: loggedInViaDID,
  }), [loggedInViaDID, user])
}
